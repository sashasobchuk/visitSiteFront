import React, {useState} from 'react';
import './mailer.css'
import {useDispatch} from "react-redux";
import {sendMessage} from "../../../redux/MessageLoginReducer";
const Mailer = () => {
    const dispath = useDispatch()
    const [mailValue, changeMailValue] = useState('')
    const [messageValue, changeMessageValue] = useState('')
    const changeMessageHandler=(e)=>{
        changeMessageValue(e.currentTarget.value)
    }
    const changeMailHandler=(e)=>{
        changeMailValue(e.currentTarget.value)
    }
    const addMessageHandler=()=>{
            dispath(sendMessage(mailValue,messageValue))
    }


    return (
        <div>

            <div  name='loginMessageForm' className='form' >

                <h1> Надіслати повідомлення</h1>
                {/*<a href="sasha.sobchuk18@gmail.com" >sasha.sobchuk18@gmail.com</a>*/}

                <div>
                    <span> Email</span><br/>
                    <input value={mailValue} onChange={(e)=>changeMailHandler(e)} type="text" placeholder='email'/>
                </div>
                <div>
                    <span> message</span><br/>

                    <textarea value={messageValue} onChange={(e)=>changeMessageHandler(e)} type="text" rows="5" cols="45" placeholder='message'/>
                </div>
                <button onClick={() => addMessageHandler()}> відправити</button>

            </div>

        </div>
    );
};


export default Mailer;