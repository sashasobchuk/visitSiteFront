import React, {useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import './FullFotoItem.css'
import {hostUrl} from "../../../config";
import {addComment_T, DeleteComment_T, hideFullFotoItemImgSrc} from "../../../redux/fotoPageReducer";

const FullFotoItem = () => {
    const [inputValue, changeInputValue] = useState('')

    const isAuth = useSelector(state => state.header.isAuth)
    const inputRef = useRef()

    const item = useSelector(state => state.fotoPage.item)
    const dispatch = useDispatch()
    const FullFotoItemImgSrc = useSelector(state => state.fotoPage.FullFotoItemImgSrc)
    const foto = `${hostUrl}${FullFotoItemImgSrc}`
    const hideFullItemHandler = () => {
        dispatch(hideFullFotoItemImgSrc())
    }
    const ChangeInputHandler = (e) => {
        changeInputValue(e.currentTarget.value)
    }
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
    const FullFotoItemDisplay = useSelector(state => state.fotoPage.FullFotoItemDisplay)
    const deleteCommentHandler = (commentId) => {
        dispatch(DeleteComment_T(commentId))
    }
    return (
        <div className='FullFotoItem' style={{display: FullFotoItemDisplay}}>
            <input className='FullFotoItem__exit' onClick={hideFullItemHandler} value='x' type='button'/>
            <div className='FullFotoItem__imgDiv'>
                <img className='FullFotoItem__imgDiv__img' src={foto} alt=""/>
            </div>
            <div className='FullFotoItem__commentDivs'>
                {item.fotoComments.map(comment =>
                    <div>
                        <div className='FullFotoItem__commentDivs__Item'>
                            {comment.value}
                            {isAuth && <input
                                className='FullFotoItem__commentDivs__Item__delete'
                                type="button" value='X'
                                onClick={() => deleteCommentHandler(comment._id)}/>}
                        </div>
                    </div>
                )}
                <div className='fotoItem__comment__input'>
                    <input type="text" placeholder='comment' ref={inputRef} value={inputValue} onKeyDown={(e)=>enterAddComment(e)}
                           onChange={(e) => ChangeInputHandler(e)}/>
                    <button onClick={() => addCommentHandler()}> додати</button>
                </div>
            </div>

        </div>
    );
};

export default FullFotoItem;