import React, {useState} from 'react';
import { Navbar,Offcanvas, Nav, Row, Col} from 'react-bootstrap';
import LOGO from '../../assets/images/logo.png'
import '../Footer/header.scss'
import 'animate.css'


export default function Header() {
    const [inHover, setHover] = useState(false);
    const [inService, setService] = useState(false);
    const [inHolding, setHolding] = useState(false);
    const [inEvent, setEvent] = useState(false);
    const [inArticle, setArticle] = useState(false);

  return <div className='header-style'>
      <Navbar expand={false} className='px-4 header-style bg-opacity-10' variant='dark' fixed='top' >
        <Row className='w-100'>
            <Col md={4}></Col>
            <Col md={4} className='text-center' xs={6}><Navbar.Brand><img src={LOGO} className="img-logo"></img></Navbar.Brand></Col>
            <Col md={4} className='text-end' xs={6}><Navbar.Toggle aria-controls="offcanvasNavbar"/></Col>
        </Row>
        <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className='header-style'>
                <Row className='h-100'>
                    <Col md={8} sm={12}>
                        {inHover && <div className='position-relative w-100 h-100'>
                            <div className=' position-absolute top-0 start-0 animate__animated animate__backInDown' id='img-nosotros1' ></div>
                            <div className='header-img-2 position-absolute bottom-0 end-0 animate__animated animate__backInUp' id='img-nosotros2'></div>
                        </div>}

                        {inService && <div className='position-relative w-100 h-100'>
                            <div className=' position-absolute top-0 start-0 animate__animated animate__backInDown' id='img-service1'></div>
                            <div className='header-img-2 position-absolute bottom-0 end-0 animate__animated animate__backInUp' id='img-service2'></div>
                        </div>}

                        {inHolding && <div className='position-relative w-100 h-100'>
                            <div className=' position-absolute top-0 start-0 animate__animated animate__backInDown' id='img-holding1'></div>
                            <div className='header-img-2 position-absolute bottom-0 end-0 animate__animated animate__backInUp' id='img-holding2'></div>
                        </div>}

                        {inEvent && <div className='position-relative w-100 h-100'>
                            <div className=' position-absolute top-0 start-0 animate__animated animate__backInDown' id='img-eventos1'></div>
                            <div className='header-img-2 position-absolute bottom-0 end-0 animate__animated animate__backInUp' id='img-eventos2'></div>
                        </div>}

                        {inArticle && <div className='position-relative w-100 h-100'>
                            <div className=' position-absolute top-0 start-0 animate__animated animate__backInDown' id='img-articulos1'></div>
                            <div className='header-img-2 position-absolute bottom-0 end-0 animate__animated animate__backInUp' id='img-articulos2'></div>
                        </div>}

                    </Col>
                    <Col md={4} sm={12}>
                        <Nav className="header-navbar">

                            <Nav.Link href="#action1" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>NOSOTROS</Nav.Link>
                            <Nav.Link href="#action2" onMouseEnter={() => setService(true)} onMouseLeave={() => setService(false)}>SERVICIOS</Nav.Link>
                            <Nav.Link href="#action3" onMouseEnter={() => setHolding(true)} onMouseLeave={() => setHolding(false)}>HOLDING</Nav.Link>
                            <Nav.Link href="#action4" onMouseEnter={() => setEvent(true)} onMouseLeave={() => setEvent(false)}>EVENTOS</Nav.Link>
                            <Nav.Link href="#action5" onMouseEnter={() => setArticle(true)} onMouseLeave={() => setArticle(false)}>ARTÍCULOS</Nav.Link>

                        </Nav>
                    </Col>
                </Row>
            </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Navbar>
  </div>;
}
