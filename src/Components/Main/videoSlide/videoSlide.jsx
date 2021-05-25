import React from 'react';
import './videoSlide.css'
import {hostUrl} from "../../../config";

const VideoSlide = ({item}) => {
    const video = item._id === 'standard' ? `${item.video_Url_Name}` : `${hostUrl + item.video_Url_Name}`

    return (
        <div className='sliderVideo'>
            <video width="100%" src={video} controls className='videoItem__videoTag'> </video>
        </div>
    );
};

export default VideoSlide;