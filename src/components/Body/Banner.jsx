import React from 'react';
import './banner.scss';
import {Row, Col} from 'react-bootstrap'

export default function Banner() {
  return <div className='body-style'>
    <div className='banner-style pt-5 pb-5 body-style'>
      <Row className='body-style'>
        <Col md={7} className='body-style'>
          <div className='text-efect'>
            <a title="Vive tu Pasión">
            Vive tu Pasión
            </a>
            <a title='alcanza tu'>
              alcanza tu 
            </a>
            <a title='PROPÓSITO'>
              PROPÓSITO 
            </a>
            <a title='y saborea el ÉXITO.'>
              y saborea el
            </a>
            <a title='ÉXITO.'>
              ÉXITO.
            </a>
          </div>
        </Col>
        <Col md={5}></Col>
      </Row>
    </div>
  </div>
}
