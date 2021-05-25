import React from 'react';
import './AddItem.css'
import {useState} from "react";
import {useDispatch} from "react-redux";
import {AddCItem} from "../../../redux/concertPageReducer";


const AddItem = () => {

    const [citiName, changeCitiName] = useState('ternopil')
    function changeCitiNameHandler(e) {changeCitiName(e.currentTarget.value)}
    const [status, changeStatus] = useState('')
    function changeStatusNameHandler(e) {changeStatus(e.currentTarget.value)}
    const [date, changeDate] = useState(new Date().toISOString())
    function changeDateHandler(e) {changeDate(e.currentTarget.value)}
    const [isDone, changeIsDone] = useState(false)
    const changeIsDoneHandler = () => {
        const toDone = () => {
            changeIsDone(false)
        }
        const toNotDone = () => {
            changeIsDone(true)
        }
        isDone ? toDone() : toNotDone()

    }

    const dispatch = useDispatch()
    const addItemHandler = () => {
        dispatch(AddCItem(date,citiName,status,isDone))
    }
    return (
        <div className='addItem'>

            <div className='addItem__time'>
                <input type="date" value={date} onChange={(e) => changeDateHandler(e)}/>

            </div>
            <div>
                <input type="text" value={citiName} placeholder='Citi Name' onChange={(e) => {
                    changeCitiNameHandler(e)
                }}/>
            </div>
            <div>
                <input type="text" value={status} placeholder='status' onChange={(e) => {
                    changeStatusNameHandler(e)
                }}/>
            </div>

            <div>
                {isDone === true ? <span>done</span> : <span> not done))</span>}
                <input type="button" value='changeces' onClick={changeIsDoneHandler}/>
            </div>
            <div>
                <input className='addItem__Addbtn' type="button" value='__add__' onClick={addItemHandler}/>
            </div>

        </div>
    );
};

export default AddItem;