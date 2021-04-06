import React from 'react';
import YouTube from 'react-youtube';

function VideoPlayer({videoId}) {
    return (
        <div>
            <YouTube
                width={740}
                videoId={videoId}
            />
        </div>
    )
}

export default VideoPlayer
