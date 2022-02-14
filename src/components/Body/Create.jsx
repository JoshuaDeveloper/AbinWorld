import React from 'react';
import './create.scss';
import {Row, Col} from 'react-bootstrap';
import 'animate.css';


function Create() {
  return <div className='body-style'>
      <div className='create-style body-style'>
        <div className='text-end animate__animated animate__fadeInRight'>
            <h1 className='create-text'>CREAMOS</h1>
        </div>
        <div>
            <div className='create-text-h4-width'>
                <h1 className='create-text-h4'>
                    Mediante nuestros procesos 
                    incubamos tu idea hasta
                    hacerla despegar por medio de nuestro ABINPLAN.
                </h1>
            </div>
        </div>
        <div className='create-table-style pt-5 pb-5'>
            <Row>
                <Col  md={4} sm={12}>
                    <div className='create-col-style' id='albor'>
                        <div className='create-margin'>
                            <a href='https://abin.world/albor/'>
                                
                                <div className='text-end'>
                                    <p className='create-p-title'>ALBOR</p>
                                </div>
                                <div className='text-end create-margin-body'>
                                    <p className='create-p-body'>
                                            Un programa diseñado, a través 
                                            del cual desarrollamos un plan 
                                            de negocio para la construcción 
                                            de tu negocio desde tu idea, 
                                            la desarrollamos junto contigo
                                    </p>
                                </div>          
                            </a>
                        </div>     
                    </div>  
                </Col>
                <Col md={4} sm={12}>
                    <div className='create-col-style' id='mentor'>
                        <div className='create-margin'>
                            <a href='https://abin.world/mentor/'>
                                <div className='text-end'>
                                    <p className='create-p-title'>MENTOR</p>
                                </div>
                                <div className='text-end'>
                                    <p className='create-p-body'>
                                    Ofrece la mayor y mejor red de 
                                    mentores voluntarios de negocios 
                                    que brindan respuestas a sus 
                                    preguntas comerciales
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>
                </Col>
                <Col md={4} sm={12}>
                    <div className='create-col-style' id='developer'>
                        <div className='create-margin'>
                            <a href='https://abin.world/developer/'>
                                <div className='text-end'>
                                    <p className='create-p-title'>DEVELOPER</p>
                                </div>
                                <div className='text-end'>
                                    <p className='create-p-body'>
                                    Desarrollamos proyectos, 
                                    convocando a profesionales 
                                    independientes, empresas y 
                                    compañías o cualquier 
                                    stakehorder que requiera el 
                                    desarrollo de un proyecto
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
      </div>
  </div>;
}

export default Create;
