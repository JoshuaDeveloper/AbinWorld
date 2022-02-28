import React from 'react';
import './banner.scss';
import {Row, Col} from 'react-bootstrap'

export default function Banner() {
  return <div className='body-style'>
    <div className='banner-style pt-5 pb-5 body-style'>
      <Row className='body-style'>
        <Col lg={10} md={8} sm={12} className='body-style'>
          <div className='text-efect'>
            <h1 className='re'>
              RE
            </h1>
            <h1 className='imaginando'>
              IMAGINANDO
            </h1>
            <h1 className='educacion'>
              LA EDUCACIÓN
            </h1>
            <h1 className='perfecta'>
              PERFECTA
            </h1>
            <h1 className='paratu'>
              PARA TU
            </h1>
            <h1 className='emprendimiento'>
              EMPRENDIMIENTO.
            </h1>
          </div>
        </Col>
        <Col lg={2} md={4}></Col>
      </Row>
    </div>
  </div>
}
