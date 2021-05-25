import React from 'react';
import downloadFotoIcon from "../../acces/forFoto/downloadFotoIcon.png";
import {useDispatch, useSelector} from "react-redux";
import {closePopUp, DownloadFotoPage, MakeNewItem} from "../../redux/fotoPageReducer";
import './popUp.css'

const PopUp = () => {
    const dispatch = useDispatch()
    const popupDisplay = useSelector(state => state.fotoPage.popupDisplay)
    const closePopUpHandeler = () => {
        dispatch(closePopUp('none'))

    }
    const onclickImgHandler = (e) => {
        const avaItem3 = e.target.files[0]
        dispatch(MakeNewItem(avaItem3))
        dispatch(DownloadFotoPage())
        closePopUpHandeler()
    }

    return (
        <>
            <div className='popUp' style={{display: popupDisplay}}>
                <img className='popUp__img' src={downloadFotoIcon} alt='error'/>
                <input className='popUp__close' onClick={closePopUpHandeler} value='x' type='button'/>
                    <input type="file" onChange={(event =>onclickImgHandler(event) )} className='popUp__inputFile'/>


            </div>

        </>
);
};

export default PopUp;