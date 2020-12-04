import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input,Row, Col } from 'reactstrap';
import Container from 'reactstrap/lib/Container';
import './form.style.css';

const FormTag = () => {
    return (
        <Container>
            <h1 className="text-center">FORMULARIO PARA ACTIVACIÓN U HOMOLOGACIÓN DEL TAG</h1>
            <h2 className="text-center">Si adquirió el tag o ya dispone de otra estación de peaje llene los siguientes campos:</h2>
            <Form enctype="multipart/form-data">
                <h2 className="text-left">ACTIVAR TAG EN:</h2>

                <FormGroup check className="pt-3">
                    <Label check>
                        <Input type="checkbox" />{' '}Peaje Alóag

                    </Label>
                </FormGroup>

                <FormGroup check className="pt-3">
                    <Label check>
                        <Input type="checkbox" />{' '}
                        Peajes CONORTE S.A. (Chivería, Yahuachi, Daule, Samborondón, La Cadena,Colimes, Guayas Norte)
                    </Label>
                </FormGroup>

                <FormGroup check className="pt-3">
                    <Label check>
                        <Input type="checkbox" />{' '}
                        Peajes CONCEGUA S.A. (Boliche,Tambo,Milagro, El Triunfo, Naranjal,Naranjito)
                    </Label>
                </FormGroup>

                <FormGroup check className="pt-3 mb-4">
                    <Label check>
                        <Input type="checkbox" />{' '}
                        Peaje PAN (El Pan)
                    </Label>
                </FormGroup>

                <h5 className="text-left">DATOS PERSONA NATURAL (propietario del vehículo según matrícula) </h5>

                <FormGroup>
                    <Label for="exampleEmail">Nombres</Label>
                    <Input type="text" name="nombres" placeholder="Ingrese sus nombres" />
                </FormGroup>

                <FormGroup>
                    <Label for="examplePassword">Apellidos</Label>
                    <Input type="text" name="apellidos" placeholder="Ingrese sus apellidos" />
                </FormGroup>

                <FormGroup>
                    <Label for="examplePassword">C.I</Label>
                    <Input type="text" name="cedula" placeholder="Ingrese su cedula" />
                </FormGroup>

                <FormGroup>
                    <Label for="examplePassword">Teléfono</Label>
                    <Input type="text" name="telefono" placeholder="Ingrese su teléfono" />
                </FormGroup>

                <FormGroup className="mb-4">
                    <Label for="examplePassword">Email</Label>
                    <Input type="email" name="email" placeholder="Ingrese su correo" />
                </FormGroup>

                <FormGroup className="mb-4">
                    <Label for="examplePassword">Imagen de cedula</Label>
                    <Input type="file" name="cedulafoto"/>
                </FormGroup>

                <h5 className="text-left">DATOS VEHÍCULO (consta en la matrícula) ANTE EL INTENTO DE FRAUDE SERÁ ELIMINADO</h5>

                <FormGroup>
                    <Label for="exampleEmail">Placa</Label>
                    <Input type="text" name="placa" placeholder="Ingrese el placa del vehículo" />
                </FormGroup>

                <FormGroup>
                    <Label for="examplePassword">Marca</Label>
                    <Input type="text" name="marca" placeholder="Ingrese el marca del vehículo" />
                </FormGroup>

                <FormGroup>
                    <Label for="examplePassword">Modelo</Label>
                    <Input type="text" name="modelo" placeholder="Ingrese el modelo del vehículo" />
                </FormGroup>

                <FormGroup className="mb-4">
                    <Label for="examplePassword">Color</Label>
                    <Input type="text" name="color" placeholder="Ingrese el color del vehículo" />
                </FormGroup>


                <h5 className="text-left">SELECCIONE EL NÚMERO DE EJES</h5>

            <FormGroup tag="fieldset">

                <Row>

                <Col md="4">
                <FormGroup check>
                        <Label check>
                            <Input type="radio" name="radio1" />{' '}
                        Option one is this and that—be sure to include why it's great
                        </Label>
                    </FormGroup>
                </Col>
                    

                    <Col md="4">
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="radio1" />{' '}
                            Option one is this and that—be sure to include why it's great
                            </Label>
                        </FormGroup>
                    </Col>

                    <Col md="4">
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="radio1" />{' '}
                            Option one is this and that—be sure to include why it's great
                            </Label>
                        </FormGroup>
                    </Col>

                    </Row>

                    <Row>

                    <Col md="4">
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="radio1" />{' '}
                            Option one is this and that—be sure to include why it's great
                            </Label>
                        </FormGroup>
                    </Col>

                    <Col md="4">
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="radio1" />{' '}
                            Option one is this and that—be sure to include why it's great
                            </Label>
                        </FormGroup>
                    </Col>

                    <Col md="4">
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="radio1" />{' '}
                            Option one is this and that—be sure to include why it's great
                            </Label>
                        </FormGroup>
                    </Col>

                    </Row>
            </FormGroup>

            <h5 className="text-left">NÚMERO DEL TAG (Escriba cuidadosamente el número impreso en el tag Ej. E200XXXXXXX)</h5>

            <FormGroup>

            <FormGroup>
                    <Label for="exampleEmail">Número TAG</Label>
                    <Input type="text" name="placa" placeholder="Ingrese el número impreso en el tag Ej. E200XXXXXXX" />
                </FormGroup>

                <FormGroup>
                    <Label for="exampleEmail">Foto TAG</Label>
                    <Input type="file" name="fotoTag"/>
                </FormGroup>
            </FormGroup>

                <Button>Submit</Button>
            </Form>
        </Container>
    );
}

export default FormTag;