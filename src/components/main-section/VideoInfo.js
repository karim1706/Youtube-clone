import React from 'react'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import SideBarRow from '../sidebar/SidebarRow';
import ReplyIcon from '@material-ui/icons/Reply';
import MoreHorizon from '@material-ui/icons/MoreHoriz';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import { Avatar, Button} from '@material-ui/core';

function VideoInfo( {title, description, publishedDate, channelTitle, channelImage, viewCount, likeCount, dislikeCount, subs} ) {

    return (
        <div className="videoInfo">
            <div className="VideoInfo__headline">
                <h1> {title} </h1>
            </div>
            <div className="VideoInfo__stats">
                <p>{viewCount} views . {publishedDate}</p>
                <div className="VideoInfo__likes">
                    <SideBarRow Icon={ThumbUpIcon} title={likeCount} />
                    <SideBarRow Icon={ThumbDownIcon} title={dislikeCount} />
                    <SideBarRow Icon={ReplyIcon} title='SHARE' />
                    <SideBarRow Icon={PlaylistAddIcon} title='SAVE' />
                    <SideBarRow Icon={MoreHorizon} title='' />
                </div>
            </div>
            <hr/>
            <div className="VideoInfo__channel">
                <div>
                    <Avatar 
                        className="videoInfo__avatar"
                        alt={channelTitle}
                        src={channelImage}
                    />
                    <div className="VideoInfo__channelInfo">
                        <h3 className="VideoInfo__channelTitle">{channelTitle}</h3>
                        <p className="VideoInfo__channelSubs">{subs} subscribers</p>
                    </div>
                </div>
                <div className="videoInfo__subscribe">
                    <Button color="secondary">SUBSCRIBE</Button>
                </div>
            </div>
            <div className="VideoInfo__channelDesc">
                <p> {description} </p>
            </div>
        </div>
    )
}

export default VideoInfo
