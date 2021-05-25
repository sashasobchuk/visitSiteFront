import React from 'react';

import downloadFotoIcon from '../../../acces/forFoto/downloadFotoIcon.png'
import {useDispatch} from "react-redux";

import './AddVideoItem.css'
import { showePopUp} from "../../../redux/videoPageReducer";

const AddFotoItem = () => {
    const dispatch = useDispatch()



    const showPopupHandler=()=>{
        dispatch(showePopUp('flex'))

    }


    return (<>
        <div className='videoItem videoItemDownload'>
            <div className="video-upload">
                <img className='videoItem__imgDiv' width='100%' src={downloadFotoIcon} alt={downloadFotoIcon}
                     onClick={showPopupHandler}/>

            </div>

        </div>

    </>)
};

export default AddFotoItem;