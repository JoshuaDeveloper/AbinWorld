import React from 'react';
import Img_gif from '../../assets/gifs/logo_carga.gif';
import './loading.scss'

function Loading() {
    return (
        <div className='loading_style'>
            <img src={Img_gif} alt="cargando"></img>
        </div>
    );
}

export default Loading;