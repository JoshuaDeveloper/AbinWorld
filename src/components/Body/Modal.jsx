import React,{useState} from 'react';
import {Modal, Form, Button} from 'react-bootstrap'

function Modal_abin(props) {
    const [show,setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return <div>
        <a href='#modal' onClick={handleShow}><p>Déjanos tus datos</p></a>
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton className='bg-black'>
                <Modal.Title className="text-light">
                    DÉJANOS TUS DATOS
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='bg-black'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control type="text" placeholder="Nombre" name="from_name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formCellName">
                        <Form.Control type="number" placeholder="Celular" name="from_cellphone"></Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Control type="email" placeholder="Correo Electrónico" name="from_email"></Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formMessage">
                        <Form.Control as='textarea' rows={3}  placeholder="Mensaje" name="from_message"></Form.Control>
                    </Form.Group>

                    <Button className='text-center'>ENVIAR</Button>
                </Form>
            </Modal.Body>
        </Modal>
    </div>
}

export default Modal_abin;