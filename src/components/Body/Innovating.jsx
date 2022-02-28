import React from 'react';
import './innovating.scss'
import {Row, Col} from 'react-bootstrap'
import 'animate.css'

function Innovating() {
  return <div className='body-style'>
    <div className='innovating-style body-style'>
        <div className='text-end animate__animated animate__fadeInRight'>
            <h1 className='create-text'>INNOVANDO</h1>
        </div>
        <div className='container'>
            <div className='inn-div'>
              <div className='innovating_text '>
                  <a href='#abines'>Conoce nuestro Abines</a>
                  <h2>Emprendedores de éxito, que ya
                      despegaron con nuestra asesoría integral.
                  </h2>
              </div>
            </div>
        </div>
    </div>
  </div>;
}

export default Innovating;
