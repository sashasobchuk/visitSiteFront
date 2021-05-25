import React, {useEffect, useState} from "react";
import UperFooter from "./uperfooter";
import LoverFooter from "./LowerFooter";
import {useSelector} from "react-redux";
import './footoore.css'

const Footer = () => {
     const FullFotoItemDisplay = useSelector(state => state.fotoPage.FullFotoItemDisplay)
    const   [footerDisplay,changeFooter] = useState('flex')
    useEffect(()=>{
        console.log(footerDisplay)

        if(FullFotoItemDisplay ==='flex'){
           changeFooter('none')
         } else{changeFooter('block')}

    },[FullFotoItemDisplay])



    return <div>
        <div  style={{display:footerDisplay}}  className='uperfoter'>
            <UperFooter/>
        </div>
        <div style={{display:footerDisplay}} className='loverfoter'>
            <LoverFooter/>
        </div>
    </div>
}


export default Footer