import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import './foto.css'
import {
    addComment_T,
    DeleteComment_T,
    DeleteItem_T,
    shoveFullFotoItemImgSrc,
} from "../../redux/fotoPageReducer";
import {hostUrl} from "../../config"


const FotoItem = ({item}) => {
    const [inputValue, changeInputValue] = useState('')
    const dispatch = useDispatch()
    //const inputRef = useRef()
    const isAuth = useSelector(state=>state.header.isAuth)
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



    }
    const deleteCommentHandler = (commentId) => {
        dispatch(DeleteComment_T(commentId))
    }
    const deleteFotoItemHandler=()=>{
        dispatch(DeleteItem_T(item._id))
    }
    const onFullImgHandler=()=>{
        dispatch(shoveFullFotoItemImgSrc(item.image_Url_Name,item))
    }

/**/
    const foto = item._id === 'standard' ? `${item.image_Url_Name}` : `${hostUrl + item.image_Url_Name}`
    return (<>
        <div className='fotoItem'>
            <span className='fotoItem__tittle'></span>
             <img className='fotoItem__imgDiv' onClick={onFullImgHandler} width='100%' src={foto} alt={foto}/>
            {isAuth  && <div className= 'fotoItem__deleteItem'><input onClick={deleteFotoItemHandler} type="button" value='x'/></div>}

            <div className='fotoItem__comment'>
                {item.fotoComments.map(comment =>
                    <div key={comment._id} className='fotoItem__comment__main'>
                        <span>{comment.value}
                            {(isAuth  || comment.userId === localStorage.getItem('userId'))
                            && <span onClick={() => deleteCommentHandler(comment._id)} className='fotoItem__comment__delete_X'>X</span>}
                        </span>
                    </div>
                )}

                <div className='fotoItem__comment__input'>
                    <input type="text" placeholder='comment'  value={inputValue} onKeyDown={(e)=>enterAddComment(e)}
                           onChange={(e) => ChangeInputHandler(e)}/>
                    <button onClick={() => addCommentHandler()}> додати</button>
                </div>
            </div>

        </div>

    </>)
}

export default FotoItem