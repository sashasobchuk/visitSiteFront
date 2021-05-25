import React, {useEffect, useState} from "react";
import {hostUrl} from "../../config"

import  './video.css'
import {useDispatch, useSelector} from "react-redux";
import { DeleteItem_T} from "../../redux/videoPageReducer";
import {useRef} from "react";
import {addComment_T} from "../../redux/videoPageReducer";
import {DeleteComment_T} from "../../redux/videoPageReducer";
const VideoItem = ({item}) => {
    const [inputValue, changeInputValue] = useState('')
    const dispatch = useDispatch()
    const isAuth = useSelector(state=>state.header.isAuth)

    const video = item._id === 'standard' ? `${item.video_Url_Name}` : `${hostUrl + item.video_Url_Name}`
        useEffect(()=>{
        },[])
    function deleteVideoItemHandler() {
    dispatch(DeleteItem_T(item._id))
    }
    const ChangeInputHandler = (e) => {
        changeInputValue(e.currentTarget.value)
    }
    const inputRef = useRef()
    const enterAddComment=(e)=>{
        /** при нажаті на ентер також запускаєм  addCommentHandler*/
        if(e.key ==='Enter') {
            addCommentHandler()
        }
    }
    const addCommentHandler = () => {
        dispatch(addComment_T(inputValue, item._id))
        /** зануляєм після відправлення**/
        changeInputValue('')
        /** фокусуємо відразу після розфукусування(надаті на кнопку) що продовжувати писати */
    }
    const deleteCommentHandler = (commentId) => {
        dispatch(DeleteComment_T(commentId))
    }

    return (<>
        <div  className="videoItem">
            <div className='videoItem__videoPlayer'>
                <video width="100%"   src={video}      controls className='videoItem__videoTag' > </video>
                {isAuth ===true &&<div className= 'videoItem__deleteItem'><input onClick={deleteVideoItemHandler} type="button" value='X'/></div>}

            </div>
            {item.VideoComments.map(comment =>
                <div className='fotoItem__comment__main'>
                        <span>{comment.value}
                            {(isAuth ||  comment.userId === localStorage.getItem('userId'))
                             &&
                            <span onClick={() => deleteCommentHandler(comment._id)} className='fotoItem__comment__delete_X'>X</span>}

                        </span>
                </div>
            )}
            <div className='fotoItem__comment__input'>
                <input type="text" placeholder='comment' ref={inputRef} value={inputValue} onKeyDown={(e)=>enterAddComment(e)}
                       onChange={(e) => ChangeInputHandler(e)}/>
                <button onClick={() => addCommentHandler()}> додати</button>
            </div>


        </div>


    </>)
}

export default VideoItem