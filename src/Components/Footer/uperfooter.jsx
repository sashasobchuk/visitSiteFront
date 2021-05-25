import React from'react'
import './footoore.css'
import itunes from './../../acces/foto/uperfoter/ico-itunes.svg'
 import icoAppleMusic from './../../acces/foto/uperfoter/ico-apple-music.svg'
 import icogoogleplay from './../../acces/foto/uperfoter/ico-google-play.svg'
 import icoDeezer from './../../acces/foto/uperfoter/ico-deezer.svg'
 import icoSpotify from './../../acces/foto/uperfoter/ico-spotify.svg'
 import icoAmazon from './../../acces/foto/uperfoter/ico-amazon.svg'
 import icoTidal from './../../acces/foto/uperfoter/ico-tidal.svg'
import napster from './../../acces/foto/uperfoter/ico-napster.svg'
import youtubeMusic from './../../acces/foto/uperfoter/ico-youtube-music.svg'
import youtube from './../../acces/foto/uperfoter/ico-youtube.svg'

const UperFooter =()=>{
    return <div>
        <div className='countdown'>
            <a href="" target="_blank" rel="noopener" title="iTunes">
                <img src={itunes} alt="iTunes"/>
            </a>
            <a href="" title="Apple Music" target="_blank" rel="noopener">
                <img src={icoAppleMusic} alt="Apple Music"/>
            </a>
            <a href="" title="Google Play" target="_blank" rel="noopener">
                <img src={icogoogleplay} alt="Google Play"/>
            </a>
            <a href="" title="Deezer" target="_blank" rel="noopener">
                <img src={icoDeezer} alt="Deezer"
                     />
            </a>
            <a href="" title="Spotify" target="_blank" rel="noopener">
                <img src={icoSpotify} alt="Spotify"/></a>
            <a href="" title="Amazon Music" target="_blank" rel="noopener">
                <img src={icoAmazon} alt="Amazon Music"
                     />
            </a>
            <a href="https://tidal.com/" title="TIDAL" target="_blank" rel="noopener">
                <img src={icoTidal} alt="TIDAL"/>
            </a>
            <a href="" title="Napster" target="_blank" rel="noopener">
                <img src={napster} alt="Napster"/>
            </a>
            <a href="" title="YouTube Music" target="_blank" rel="noopener">
                <img src={youtubeMusic} alt="YouTube Music"/>
            </a>
            <a href="" title="YouTube" target="_blank" rel="noopener">
                <img src={youtube} alt="Youtube"/>
            </a>
        </div>
    </div>
}


export default UperFooter