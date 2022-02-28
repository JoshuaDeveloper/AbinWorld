import React from 'react'
import './together.scss'
import {Row, Col} from 'react-bootstrap'
import Flecha from '../../assets/images/arrow_36.png'
import 'animate.css'
import Modal from './Modal'

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
                                <div className='together_space'><Modal></Modal></div>
                                <div><a href='#mapa'><p><img src={Flecha}></img>Nuestras oficinas</p></a></div>
                                <div className='together_space'><p>Urbanización La Estrella G-6, José Luis Bustamante y Rivero 04009</p></div>
                                <div className='together_space'><p>Arequipa - Perú</p></div>
                            </div>
                        </div>  
                    </Col>
                    <Col md={6}>
                        <div className='together-text-1'>
                                <div className='w-100'>
                                    <div><a href='https://www.facebook.com/Abinincubator' target='_blank'>Facebook</a></div>
                                    <div><a href='https://www.instagram.com/abin.incubadora/?hl=es-la' target='_blank'>Instagram</a></div>
                                    <div><a href='https://twitter.com/abin_abaco' target='_blank'>Twitter</a></div>
                                    <div><a href='https://www.linkedin.com/company/abin-abaco-incubator/' target='_blank'>Linkedin</a></div>
                                    <div><a href='#tiktok'>Tiktok</a></div>
                                    <div><a href='#tiktok'>Spotify</a></div>
                                    <div><a href='https://www.youtube.com/channel/UCHVad9S8E0YEjYAITl9GyPA' target='_blank'>Youtube</a></div>
                                </div> 
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    </div>
  )
}
