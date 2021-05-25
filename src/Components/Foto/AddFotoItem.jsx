import React from 'react';

import downloadFotoIcon from './../../acces/forFoto/downloadFotoIcon.png'
import {useDispatch} from "react-redux";

import './foto.css'
import {showePopUp} from "../../redux/fotoPageReducer";

const AddFotoItem = () => {
    const dispatch = useDispatch()



    const showPopupHandler=()=>{
        dispatch(showePopUp('flex'))

    }


    return (<>
        <div className='fotoItem fotoItemDownload'>
            <div className="image-upload">
                <img className='fotoItem__imgDiv' width='100%' src={downloadFotoIcon} alt={downloadFotoIcon}
                onClick={showPopupHandler}/>

            </div>

        </div>

    </>)
};

export default AddFotoItem;