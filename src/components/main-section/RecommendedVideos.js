import React, { useEffect, useState } from 'react'
import './RecommendedVideos.css';
import VideoCard from './VideoCard';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {DateTime} from 'luxon';
import Alert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';

function RecommendedVideos() {

    const [videoCards, setVideoCards] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);   

    useEffect(() => {
        axios
          .get(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=12&regionCode=FR&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
          .then(response => {
            createVideoCards(response.data.items);
          })
          .catch(error => {
            console.log(error);
            setIsError(true);
          })
        }, []);

    async function createVideoCards(videoItems){
        let newVideoCards = [];
        for (const video of videoItems) {
            const videoId = video.id;
            const snippet = video.snippet;
            const channelId = snippet.channelId;
            const response = await axios
                                    .get(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`);
            const channelImage = response.data.items[0].snippet.thumbnails.medium.url;
            
            const title = snippet.title;
            const image = snippet.thumbnails.medium.url;
            const views = video.statistics.viewCount;
            const timestamp = DateTime.fromISO(snippet.publishedAt).toRelative();
            const channel = snippet.channelTitle;

            newVideoCards.push({
                videoId,
                image,
                title,
                channel,
                views,
                timestamp,
                channelImage
            });
        };
        setVideoCards(newVideoCards);
        setIsLoading(false);
    }

    if(isError) {
        return <Alert severity="error" className="loading">No results found</Alert>
    }

    return (
        <div className="recommendedVideos">

            {isLoading? <CircularProgress className="loading" color="secondary"/> : null}

            <div className="categories">
                <span className="categories__item">Tous</span>
                <span className="categories__item">Comédie</span>
                <span className="categories__item">Musique</span>
                <span className="categories__item">Jeu vidéo</span>
                <span className="categories__item">Scène</span>
                <span className="categories__item">Histoire</span>
                <span className="categories__item">La Liga</span>
            </div>
            
            <div className="recommendedVideos__videos">
                
                {
                    videoCards.map(item => {
                        return (
                            <Link key={item.videoId} to={`/video/${item.videoId}`}>
                                <VideoCard 
                                    title = {item.title}
                                    views = {item.views}
                                    timestamp = {item.timestamp}
                                    channelImage = {item.channelImage}
                                    channel = {item.channel}
                                    image = {item.image}
                                />
                            </Link>
                        
                        )
                    })
                }
               
            </div>
            
        </div>
    )
}

export default RecommendedVideos
