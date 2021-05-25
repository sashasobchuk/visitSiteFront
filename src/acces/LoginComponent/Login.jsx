import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {closeLogin, Login_T} from "../../redux/header.reducer";
import './Login.css'
import {useState} from "react";

const Login = () => {

    const [login,changeLogin]= useState('')
    const [password,changePassword]= useState('')
    const changeLoginHandler =(event)=>{
        changeLogin(event.currentTarget.value)
    }
    const changePasswordHandler =(event)=>{
        changePassword(event.currentTarget.value)
    }
    const dispatch = useDispatch()
    const LoginDisplay = useSelector(state => state.header.LoginDisplay)
    const closeLoginHandeler = () => {
        dispatch(closeLogin())

    }
    const EnterHandler = () => {
        dispatch(Login_T(login,password))
    }
    return (
        <div>
            <>
                <div className='Login' style={{display: LoginDisplay}}>
                    <input className='Login__close' onClick={closeLoginHandeler} value='x' type='button'/>
                    <div className='Login__form'>
                        <span> Login</span>
                        <input value={login} onChange={event => changeLoginHandler(event)} type="text" className='Login__form__input' placeholder='example.@gmail.com'/>
                        <span> Password</span>
                        <input value={password} onChange={event => changePasswordHandler(event)} type="text" className='Login__form__input' placeholder='*****'/>
                        <input type="button" onClick={EnterHandler} value='підтвердити'/>
                    </div>
                </div>

            </>
        </div>
    );
};

export default Login;