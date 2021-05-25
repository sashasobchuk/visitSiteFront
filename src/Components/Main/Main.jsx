import React from "react";
import './Main.css'
// import Mailer from "./mailer/mailer";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {DownLoAdMainPage} from "../../redux/MainPageReducer";
import FotoSlide from "./fotoSlide/fotoSlide";
import VideoSlide from "./videoSlide/videoSlide";

const Main = () => {
    const dispatch = useDispatch()
    const fotoItems = useSelector(state =>state.MainPage.fotoItems)
    const videoItems = useSelector(state =>state.MainPage.videoItems)

    useEffect(()=>{
        dispatch(DownLoAdMainPage())
    },[])
    // const foto = item._id === 'standard' ? `${item.image_Url_Name}` : `${hostUrl + item.image_Url_Name}`

    return <div className='main'>
        <div className="fotoSlider">
            <div className='fotoHidden'>
                {fotoItems.map((item,index)=>
                    <FotoSlide key={index} item={item}/>
                )}
            </div>

        </div>
        <div className='videoSlider'>
            <div className="hiddenVideo">
                {videoItems.map((item,index)=>
                    <VideoSlide key={index} item={item}/>
                )}
            </div>

        </div>


    </div>
}

export default Main