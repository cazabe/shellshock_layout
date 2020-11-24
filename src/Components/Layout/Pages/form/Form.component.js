import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Container from 'reactstrap/lib/Container';
import './form.style.css';

const FormTag = () => {
    return (
        <Container>
            <h1 className="text-center">FORMULARIO PARA ACTIVACIÓN U HOMOLOGACIÓN DEL TAG</h1>
            <h2 className="text-center">Si adquirió el tag o ya dispone de otra estación de peaje llene los siguientes campos:</h2>
            <Form>
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" />{' '}
                            Peaje Alóag
                    </Label>
                </FormGroup>

                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" />{' '}
                        Peajes CONORTE S.A. (Chivería, Yahuachi, Daule, Samborondón, La Cadena,Colimes, Guayas Norte)
                    </Label>
                </FormGroup>

                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" />{' '}
                        Peajes CONCEGUA S.A. (Boliche,Tambo,Milagro, El Triunfo, Naranjal,Naranjito)
                    </Label>
                </FormGroup>

                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" />{' '}
                        Peaje PAN (El Pan) 
                    </Label>
                </FormGroup>

                <h5 className="text-left">DATOS PERSONA NATURAL (propietario del vehículo según matrícula) </h5>

                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleSelect">Select</Label>
                    <Input type="select" name="select" id="exampleSelect">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                </FormGroup>

                <FormGroup tag="fieldset">
                    <legend>Radio Buttons</legend>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="radio1" />{' '}
              Option one is this and that—be sure to include why it's great
            </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="radio1" />{' '}
              Option two can be something else and selecting it will deselect option one
            </Label>
                    </FormGroup>
                    <FormGroup check disabled>
                        <Label check>
                            <Input type="radio" name="radio1" disabled />{' '}
              Option three is disabled
            </Label>
                    </FormGroup>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" />{' '}
            Check me out
          </Label>
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        </Container>
    );
}

export default FormTag;