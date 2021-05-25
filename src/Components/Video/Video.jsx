import React, {useEffect} from "react";
import './video.css'
import VideoItem from "./VideoItem";
import {useDispatch, useSelector} from "react-redux";
import {DownloadVideoPage} from "../../redux/videoPageReducer";
import PopUp from "../videoPopUp/PopUp";
import AddVideoItem from "./AddVideoItem/AddVideoItem";

const Video = () => {

    const IsAuth = useSelector(state => state.header.isAuth)
    const videoPage=useSelector(state=>state.videoPage)
    const dispath = useDispatch()

    useEffect(() => {
        dispath(DownloadVideoPage())
    }, [videoPage.videoItems])

    return <div className="videoPage">

        { videoPage.videoItems.map(item=>
            <VideoItem   item={item} />
        )}{IsAuth && <AddVideoItem  />}
        <PopUp/>



    </div>
}

export default Video