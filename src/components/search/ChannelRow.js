import React from 'react';
import {Avatar} from '@material-ui/core';
import './ChannelRow.css';
import VerifiedIcon from '@material-ui/icons/CheckCircleOutlineOutlined'

function ChannelRow( {image, channel, subs, nbOfVideos, description, verified} ) {
    return (
        <div className="channelRow">
            <Avatar 
                className="channelRow__logo" 
                alt={channel}
                src={image}
            />
            <div className="channelRow__text">
                <h4> {channel} {verified && <VerifiedIcon />} </h4>
                <p>
                    {subs} subscribers . {nbOfVideos} videos
                </p>
                <p> {description} </p>
            </div>
        </div>
    )
}

export default ChannelRow
