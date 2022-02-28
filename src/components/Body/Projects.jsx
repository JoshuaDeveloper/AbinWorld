import React from 'react';
import { Row, Col} from 'react-bootstrap'
import Eduabin from '../../assets/images/eduabin-logo.png'
import Aquabin from '../../assets/images/aquabin-logo.png'
import AbinHome from '../../assets/images/home_logo.png'
import Gemmadei from '../../assets/images/gemmadei_logo.png'
import Croi from '../../assets/images/croi_logo.png'
import Design from '../../assets/images/design_logo.png'
import Lotengo from '../../assets/images/lotengo_logo.png'
import Kids from '../../assets/images/kids_logo.png'
import './projects.scss'
import 'animate.css';

function Projects() {
  return <div>
      <div className='project-style'>
        <div className='text-end animate__animated animate__fadeInRight animate__delay-2s'>
            <h1 className='create-text'>PROYECTOS</h1>
        </div>
        <div>
            <Row>
              <Col md={6} sm={12}>
                <h2 className='text-light create-text-h1'>
                  Te presentamos nuestros proyectos 
                  que pertenecen a nuestro holding, en 
                  este espacio podrás ver los progresos 
                  que van teniendo.
                </h2>
                </Col>
              <Col md={6} sm={12}></Col>
            </Row>
            <Row className='mt-5'>
              <Col lg={6}>
                <div className='project-img' id='eduabin'>
                    <div className='project-img-text text-start'>
                      <div>
                        <a className='border-0 create-button' href='https://www.aquabin.abin.world' target='_blank'><img src={Aquabin} className='create-button-img'></img></a>
                        <p className='text-light'>
                          Somos un equipo de emprendedores y profesionales de diferentes rubros deseosos
                          de generar un cambio en la cultura ambiental y en la salud de las personas,
                          planeamos y creamos esta empresa con el fin de impactar de manera positiva con
                          la comunidad y el medio ambiente.
                        </p>      
                      </div>
                    </div>
                </div>
              </Col>
              <Col lg={6}>
                <div className='project-img-2' id='aquabin'>
                    <div className='project-img-text-2 text-end'>
                      <div>
                        <a className='border-0 create-button' href='https://edu.abin.world/' target='_blank'> <img src={Eduabin} className='create-button-img'></img></a>
                        <p className='text-light'>
                          Tiene el objetivo de llegar a ser una plataforma educativa diversificada con el fin de
                          repotenciar el estudio convencional de una manera innovadora para el emprendedor
                          del futuro y de este modo brindar las herramientas necesarias para el desarrollo
                          Integral de sus proyectos.
                        </p>
                      </div>
                    </div>
                </div>
              </Col>
            </Row>
            <Row className='create-row'>
              <Col lg={6}>
                <div className='project-img' id='gemmadei'>
                    <div className='project-img-text text-start'>
                      <div>
                        <a className='border-0 create-button' href='https://abinhome.com/' target='_blank'><img src={AbinHome} className='create-button-img'></img></a>
                        <p>
                        Proyecto de Bienes Raíces basada en la creación de una plataforma que servirá de
                        intermediación para los agentes inmobiliarios.
                        </p>
                      </div>
                    </div>
                </div>
              </Col>
              <Col lg={6}>
                <div className='project-img-2' id='abinhome'>
                  <div className='project-img-text-2 text-end'>
                    <div>
                      <button className='border-0 create-button'><img src={Gemmadei} className='create-button-img'></img></button>
                      <p className='text-light'>
                      Se proyecta ser una CIUDAD TECNO ECOLOGICA CIENTIFICA. Integrando y
                      generando viviendas, industrias comercio, educación, salud para formar una ciudad
                      del futuro de la mano de expertos.
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className='create-row'>
              <Col lg={6}>
                <div className='project-img' id='croi'>
                  <div className='project-img-text text-start'>
                    <div>
                      <button className='border-0 create-button'><img src={Design} className='create-button-img'></img></button>
                      <p className='text-light'>
                      Somos la parte creativa del Holding ABIN SAC, que trabaja con el diseño y la
                      imagen corporativa, los elementos visuales , diseño web, diseño digital, fotografía,
                      video y marketing digital.
                      </p>      
                    </div>
                  </div>
                </div>   
              </Col>
              <Col lg={6}>
                <div className='project-img-2' id='desing'>
                  <div className='project-img-text-2 text-end'>
                    <div>
                      <button className='border-0 create-button'><img src={Croi} className='create-button-img'></img></button>
                      <p className='text-light'>
                      Página web de Inversiones, Acciones, Bonos y Créditos para proyectos de pequeña,
                      mediana, gran empresa e incluso sin empresa.
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className='create-row'>
              <Col lg={6}>
                <div className='project-img' id='kids'>
                    <div className='project-img-text text-start'>
                      <div>
                        <a animate className='border-0 create-button' href='https://lotengo.io/' target='_blank'><img src={Lotengo} className='create-button-img'></img></a>
                        <p className='text-light'>
                        La única red de bodegueros de Latinoamérica proporcionamos a nuestros aliados
                        sistemas de gestión para su negocio, donde se integra de manera ordenada sus
                        compras y ventas, manejando inventarios para una buena atención al cliente.
                        </p>      
                      </div>
                    </div>
                </div>   
              </Col>
              <Col lg={6}>
                <div className='project-img-2' id='lotengo'>
                    <div className='project-img-text-2 text-end'>
                      <div>
                        <a className='border-0 create-button' href="https://abin.world/kids2/" target='_blank'><img src={Kids} className='create-button-img'></img></a>
                        <p className='text-light'>
                        Somos una organización corporativa que tiene el objetivo de educar a los niños en
                        el mundo del emprendimiento, mediante programas y la continua preparación
                        mediante capacitaciones desde nuestra fanpage.
                        </p>
                      </div>
                    </div>
                </div>
              </Col>
            </Row>
        </div>
        <div className='pb-5'>
          <Row className='pt-5'>
            <Col md={3}></Col>
            <Col md={6}>
              <div>
                <div className='project-holding'>
                  <p className='project-text'>
                    Este es solo el comienzo,
                    nuestro holding sigue en
                    expansión y crecimiento.
                  </p>
                  <div className='pt-4'>
                    <a href='#conocenos' className='project-a'>CONOCE TODO NUESTRO HOLDING</a>
                  </div>
                </div>
              </div> 
            </Col>
            <Col md={3}></Col>
          </Row>
        </div>
        </div>
  </div>;
}

export default Projects;
