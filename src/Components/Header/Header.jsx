import React from "react";
import {NavLink} from "react-router-dom";
import './header.css'
import {useDispatch, useSelector} from "react-redux";
import Login from "../../acces/LoginComponent/Login";
import { logAut, showLogin} from "../../redux/header.reducer";

const Header = () => {
    const isAuth = useSelector(state=>state.header.isAuth)
    const dispatch= useDispatch()

    const LoginHandler=()=>{
        dispatch(showLogin())
    }

    function logAutHaandler() {
        dispatch(logAut())
    }

    return <div>

        <div className='allHeader' >
            <div className='allHeader__leftheader'>
                <span>RUSLANA</span>
            </div>
            <div className='allHeader__headerMain'>
                <div><NavLink activeClassName='active' to="/Main"> Ruslana  </NavLink></div>
                <div><NavLink activeClassName='active' to="/Foto">Foto </NavLink></div>
                <div><NavLink activeClassName='active' to="/Video">Video </NavLink></div>
                <div><NavLink activeClassName='active' to="/Concerts">Concerts </NavLink></div>
                {/*<div><NavLink activeClassName='active' to="/Contacts">Contacts </NavLink></div>*/}
            </div>
            <div className='allHeader__rightHeader'> {isAuth ===true
                ? <span onClick={logAutHaandler} >LogAut</span>
                : <span onClick={LoginHandler}>Login</span> }</div>
        </div>

        <Login/>

    </div>
}

export default Header