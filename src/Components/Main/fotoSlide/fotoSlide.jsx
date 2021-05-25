import React from 'react';
import {hostUrl} from "../../../config";
import './fotoSlide.css'
const FotoSlide = ({item}) => {
    const foto = item._id === 'standard' ? `${item.image_Url_Name}` : `${hostUrl + item.image_Url_Name}`

    return (
        <div className='slideImg'>
            <img  src={foto} alt={foto}/>
        </div>
    );
};

export default FotoSlide;