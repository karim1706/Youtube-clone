import React, { useEffect, useState } from 'react';
import VideoRow from './VideoRow';
import './SearchPage.css';
import TuneOutLinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from './ChannelRow';
import {useParams} from 'react-router';
import axios from 'axios';
import {DateTime} from 'luxon';
import { Link } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert'

function SearchPage(props) {

    let {searchTerm} = useParams();

    const [channelRow, setChannelRow] = useState('');
    const [VideoRows, setVideoRows] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setChannelRow('');
        setVideoRows([]);
        axios
            .get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&type=channel&q=${searchTerm}&safeSearch=none&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
            .then(response => {
                createChannelRow(response.data['items'][0]);
            })


        axios
            .get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=9&type=video&q=${searchTerm}&safeSearch=none&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
            .then(response => {
                createVideoRows(response.data['items']);
                setIsError(false);
            })
          .catch(error => {
              console.log(error);
              setIsError(true);
              setIsLoading(false);
          })
    }, [searchTerm])


    async function createChannelRow(channel){
        const channelId = channel.id.channelId;
        const response = await axios
                                .get(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
        const noOfVideos = response.data.items[0].statistics.videoCount;
        const subs = response.data.items[0].statistics.subscriberCount;
        const snippet = channel.snippet;
        const title = snippet.title;
        const description = snippet.description;
        const image = snippet.thumbnails.medium.url;
        setChannelRow({
            channelId,
            image,
            title,
            subs,
            noOfVideos,
            description
        });
    }

    async function createVideoRows(videos){
        let newVideoRows = [];
        for(const video of videos) {
            const videoId = video.id.videoId;
            const response = await axios
                                    .get(`https://www.googleapis.com/youtube/v3/videos?part=statistics%2C%20snippet&id=${videoId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
            const views = response.data.items[0].statistics.viewCount;
            const snippet = video.snippet;
            const title = snippet.title;
            const timestamp = DateTime.fromISO(snippet.publishedAt).toRelative();
            const channel = snippet.channelTitle;
            const description = snippet.description;
            const image = snippet.thumbnails.medium.url;

            newVideoRows.push({
                videoId,
                title,
                image,
                views,
                timestamp,
                channel,
                description
            });
        };
        setVideoRows(newVideoRows);
        setIsLoading(false);
    }

    if(isError){
        return <Alert severity='error' className='loading'>Aucun résultat trouvé.</Alert> 
    }
    return (
        <div className="searchPage">
           <div className="searchPage__filter">
               <TuneOutLinedIcon />
                <h2>FILTER</h2>
            </div>
            {isLoading ? <CircularProgress className="loading" color="secondary" /> : null } 
            <hr />
            {!isLoading ? <ChannelRow 
                                key={channelRow.channelId}
                                image={channelRow.image}
                                channel={channelRow.title}
                                subs={channelRow.subs}
                                noOfVideos={channelRow.noOfVideos}
                                description={channelRow.description}

                        /> : null
            }
            <hr />
            {
                VideoRows.map(item => {
                    return (
                            <Link key={item.videoId} to={`/video/${item.videoId}`} >
                                <VideoRow
                                    image= {item.image}
                                    channel={item.channel}
                                    views={item.views}
                                    title={item.title}
                                    timestamp={item.timestamp}
                                    description={item.description}
                                /> 
                        
                            </Link>
                    )
                               
                }) 
            }

        </div>
    )
}

export default SearchPage
