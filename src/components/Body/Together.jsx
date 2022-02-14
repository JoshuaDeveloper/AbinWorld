import React from 'react'
import './together.scss'
import {Row, Col} from 'react-bootstrap'
import Flecha from '../../assets/images/arrow_36.png'
import 'animate.css'

export default function Together() {
  return (
    <div className='body-syle'>
        <div className='together-style body-syle'>
            <div className='text-end animate__animated animate__fadeInRight'>
                <h1 className='create-text'>JUNTOS</h1>
            </div>
            <div className='w-100'>
                <Row className='w-100'>
                    <Col md={6}>
                        <div className='together-text'>
                            <div>
                            <div><p><img src={Flecha}></img>Inicia una conversación</p></div>
                            <div className='together_space'><a href='#formulario'>Déjanos tus datos</a></div>
                            <div><a href='#mapa'><p><img src={Flecha}></img>Nuestras oficinas</p></a></div>
                            <div className='together_space'><p>Urbanización La Estrella G-6, José Luis Bustamante y Rivero 04009</p></div>
                            <div className='together_space'><p>Arequipa - Perú</p></div>
                            </div>
                        </div>  
                    </Col>
                    <Col md={6}>
                        <div className='together-text-1'>
                                <div className='w-100'>
                                    <div><a href='#facebook'>Facebook</a></div>
                                    <div><a href='#instagram'>Instagram</a></div>
                                    <div><a href='#twitter'>Twitter</a></div>
                                    <div><a href='#linkedin'>Linkedin</a></div>
                                    <div><a href='#tiktok'>Tiktok</a></div>
                                    <div><a href='#tiktok'>Spotify</a></div>
                                    <div><a href='#tiktok'>Youtube</a></div>
                                </div> 
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    </div>
  )
}
