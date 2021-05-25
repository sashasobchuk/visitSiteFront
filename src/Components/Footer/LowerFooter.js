import React from 'react'
import './footoore.css'
import insta from "../../acces/foto/loverfooter/s.png";
import fasebook from "../../acces/foto/loverfooter/f.png";
import tick from "../../acces/foto/loverfooter/t.png";
import youtoob from "../../acces/foto/loverfooter/y.png";




const LoverFooter =()=>{
    return <div>
        <div className='LoverFooter'>
            <a href="" target="_blank" rel="noopener" title="instagram">
                <img src={insta} alt="instagram"/>
            </a>
            <a href="" title="facebook" target="_blank" rel="noopener">
                <img src={fasebook} alt="facebook"/>
            </a>
            <a href="" title="ticktok" target="_blank" rel="noopener">
                <img src={tick} alt="ticktok"/>
            </a>
            <a href="" title="youtoob" target="_blank" rel="noopener">
                <img src={youtoob} alt="youtoob"/>
            </a>
           </div>
    </div>
}
export default LoverFooter






