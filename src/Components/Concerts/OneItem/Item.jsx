import React from 'react';
import './Item.css'
import {useDispatch, useSelector} from "react-redux";
import {deleteCItem} from "../../../redux/concertPageReducer";
import imgDone from '../../../acces/conserts/done.jpg'
import inProcess from '../../../acces/conserts/inProcess.png'
const Item = ({item}) => {
const dispatch=useDispatch()
    const  isAuth = useSelector(state => state.header.isAuth)
    const deleteInputHandler =()=>{
        dispatch(deleteCItem(item._id))
    }
    return (
        <>
            <div className='item' style={item.isDone === true ? {color:'#333300',backgroundColor:'transparent'}:{}}>
                <div>
                    <span className='item__time'>{item.date.substring(0,10)}</span>
                </div>
                <div>
                    <span className='item__citi' >{item.citi}</span>
                </div>
                <div className='item__status'>
                </div>
                <div className='item__status2'>
                    <span>
                                             {item.status}

                    </span>
                </div>
                <div className='item__imgDiv' ><img  className='item__imgDiv__doneImg' src={item.isDone ?imgDone : inProcess } alt=""/></div>

                {isAuth &&<input type="button" className='item__delete' value='X' onClick={deleteInputHandler}/>}
            </div>

        </>
    );
};

export default Item;