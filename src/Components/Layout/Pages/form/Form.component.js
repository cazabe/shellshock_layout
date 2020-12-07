import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input,Row, Col } from 'reactstrap';
import Container from 'reactstrap/lib/Container';
import './form.style.css';

//images
import unEje from '../../../../Assets/un_eje-removebg-preview.png';
import dosEjes from '../../../../Assets/dos_ejes-removebg-preview.png';
import tresEjes from '../../../../Assets/tres_ejes-removebg-preview.png';
import cuatroEjes from '../../../../Assets/cuatro_ejes-removebg-preview.png';
import cincoEjes from '../../../../Assets/cinco_ejes-removebg-preview.png';
import seisEjes from '../../../../Assets/seis_ejes-removebg-preview.png';


const FormTag = () => {
    //state for form
    const[aloag, setAloag] = useState("");
    const[conorte, setConorte] = useState("");
    const[consegua, setConsegua] = useState("");
    const[pan, setPan] = useState("");
    const[nombres, setNombres] = useState("");
    const[apellidos, setApellidos] = useState("");
    const[cedula, setCedula] = useState("");
    const[telefono, setTelefono] = useState("");
    const[email, setEmail] = useState("");
    const[cedulaImg, setCedulaImg] = useState("");
    //car
    const[placa, setPLaca] = useState("");
    const[marca, setMarca] = useState("");
    const[modelo, setModelo] = useState("");
    const[color, setColor] = useState("");
    //axis
    const[ejes, setEjes] = useState("");
    //tag
    const[numTag, setNumTag] = useState("");
    const[fotoTag, setFotoTag] = useState("");
    //data object
    const[tagAccount, setTagAccount] = useState({});
    
    //submit form func
    const handleSubmit = (e)=>{
        e.preventDefault();
        const actTag = {
            aloag,
            conorte,
            consegua,
            pan,
            nombres,
            apellidos,
            cedula,
            telefono,
            email,
            cedulaImg,
            placa,
            marca,
            modelo,
            color,
            ejes,
            numTag,
            fotoTag
        }
        console.log(aloag, conorte, consegua);
        setTagAccount(actTag);
    }

    console.log(tagAccount);

    // console.log(tagAccount);

    return (
        <Container>
            <h1 className="text-center">FORMULARIO PARA ACTIVACIÓN U HOMOLOGACIÓN DEL TAG</h1>
            <h2 className="text-center">Si adquirió el tag o ya dispone de otra estación de peaje llene los siguientes campos:</h2>
            
            <Form onSubmit={handleSubmit} encType="multipart/form-data">
                <h2 className="text-left">ACTIVAR TAG EN:</h2>

                <FormGroup check className="pt-3">
                    <Label check>
                        <Input type="checkbox" 
                        value="aloag"
                        onChange={(e)=>{setAloag(e.target.value)}}
                        />{' '}<p>Peaje Alóag</p>
                    </Label>
                </FormGroup>

                <FormGroup check className="pt-3">
                    <Label check>
                        <Input 
                        type="checkbox" 
                        value="conorte"
                        onChange={(e)=>{setConorte(e.target.value)}}
                        />{' '}
                        <p>Peajes CONORTE S.A. (Chivería, Yahuachi, Daule, Samborondón, La Cadena,Colimes, Guayas Norte)</p>
                    </Label>
                </FormGroup>

                <FormGroup check className="pt-3">
                    <Label check>
                        <Input type="checkbox" 
                        value="concegua"
                        onChange={(e)=>{setConsegua(e.target.value)}}
                        />{' '}
                        <p>Peajes CONCEGUA S.A. (Boliche,Tambo,Milagro, El Triunfo, Naranjal,Naranjito)</p>
                    </Label>
                </FormGroup>

                <FormGroup check className="pt-3 mb-4">
                    <Label check>
                        <Input 
                        type="checkbox" 
                        value="el pan"
                        onChange={(e)=>{setPan(e.target.value)}}
                        />{' '}
                        <p>Peaje PAN (El Pan)</p>
                    </Label>
                </FormGroup>

                <h5 className="text-left">DATOS PERSONA NATURAL (propietario del vehículo según matrícula) </h5>

                <FormGroup>
                    <Label for="exampleEmail">Nombres</Label>
                    <Input 
                    type="text" 
                    name="nombres" 
                    placeholder="Ingrese sus nombres" 
                    onChange={(e)=>{setNombres(e.target.value)}}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="examplePassword">Apellidos</Label>
                    <Input 
                    type="text" 
                    name="apellidos" 
                    placeholder="Ingrese sus apellidos"
                    onChange={(e)=>{setApellidos(e.target.value)}}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="examplePassword">C.I</Label>
                    <Input 
                    type="text" 
                    name="cedula" 
                    placeholder="Ingrese su cedula" 
                    onChange={(e)=>{setCedula(e.target.value)}}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="examplePassword">Teléfono</Label>
                    <Input 
                    type="text" 
                    name="telefono" 
                    placeholder="Ingrese su teléfono" 
                    onChange={(e)=>{setTelefono(e.target.value)}}
                    />
                </FormGroup>

                <FormGroup className="mb-4">
                    <Label for="examplePassword">Email</Label>
                    <Input 
                    type="email" 
                    name="email" 
                    placeholder="Ingrese su correo" 
                    onChange={(e)=>{setEmail(e.target.value)}}
                    />
                </FormGroup>

                <FormGroup className="mb-4">
                    <Label for="examplePassword">Imagen de cedula</Label>
                    <Input type="file" name="cedulafoto"/>
                </FormGroup>

                <h5 className="text-left">DATOS VEHÍCULO (consta en la matrícula) ANTE EL INTENTO DE FRAUDE SERÁ ELIMINADO</h5>

                <FormGroup>
                    <Label for="exampleEmail">Placa</Label>
                    <Input 
                    type="text" 
                    name="placa" 
                    placeholder="Ingrese el placa del vehículo"
                    onChange={(e)=>{setPLaca(e.target.value)}}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="examplePassword">Marca</Label>
                    <Input 
                    type="text" 
                    name="marca" 
                    placeholder="Ingrese el marca del vehículo"
                    onChange={(e)=>{setMarca(e.target.value)}}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="examplePassword">Modelo</Label>
                    <Input 
                    type="text" 
                    name="modelo" 
                    placeholder="Ingrese el modelo del vehículo" 
                    onChange={(e)=>{setModelo(e.target.value)}}
                    />
                </FormGroup>

                <FormGroup className="mb-4">
                    <Label for="examplePassword">Color</Label>
                    <Input 
                    type="text" 
                    name="color" 
                    placeholder="Ingrese el color del vehículo"
                    onChange={(e)=>{setColor(e.target.value)}}
                    />
                </FormGroup>

                <h5 className="text-left">SELECCIONE EL NÚMERO DE EJES</h5>

            <FormGroup tag="fieldset">

                <Row>

                <Col md="4">
                <FormGroup check>
                        <Label check>
                            <Input 
                            type="radio" 
                            name="radio1"
                            value="un-eje" 
                            onChange={(e)=>{setEjes(e.target.value)}}
                            />{' '}
                        <p>Referencia a vehículo con un eje</p>
                        </Label>
                        <img src={unEje} alt="un eje"/>
                    </FormGroup>
                </Col>
                    

                    <Col md="4">
                        <FormGroup check>
                            <Label check>
                                <Input 
                                type="radio" 
                                name="radio2" 
                                value="dos-ejes"
                                onChange={(e)=>{setEjes(e.target.value)}}
                                />{' '}
                           <p> Referencia a vehículo con dos ejes</p>
                            </Label>
                            <img src={dosEjes} alt="dos ejes"/>
                        </FormGroup>
                    </Col>

                    <Col md="4">
                        <FormGroup check>
                            <Label check>
                                <Input 
                                type="radio" 
                                name="radio3" 
                                value="tres-ejes"
                                onChange={(e)=>{setEjes(e.target.value)}}
                                />{' '}
                                <p>Referencia a vehículo con tres ejes</p>
                            </Label>
                            <img src={tresEjes} alt="tres ejes"/>
                        </FormGroup>
                    </Col>

                    </Row>

                    <Row>

                    <Col md="4">
                        <FormGroup check>
                            <Label check>
                                <Input 
                                type="radio" 
                                name="radio4" 
                                value="cuatro-ejes"
                                onChange={(e)=>{setEjes(e.target.value)}}
                                />{' '}
                                <p>Referencia a vehículo con cuatro ejes</p>
                            </Label>
                            <img src={cuatroEjes} alt="cuatro ejes"/>
                        </FormGroup>
                    </Col>

                    <Col md="4">
                        <FormGroup check>
                            <Label check>
                                <Input 
                                type="radio" 
                                name="radio5" 
                                value="cinco-ejes"
                                onChange={(e)=>{setEjes(e.target.value)}}
                                />{' '}
                                <p>Referencia a vehículo con cinco ejes</p>
                            </Label>
                            <img src={cincoEjes} alt="cinco ejes"/>
                        </FormGroup>
                    </Col>

                    <Col md="4">
                        <FormGroup check>
                            <Label check>
                                <Input 
                                type="radio" 
                                name="radio6" 
                                value="seis-ejes"
                                onChange={(e)=>{setEjes(e.target.value)}}
                                />{' '}
                                <p>Referencia a vehículo con seis ejes</p>
                            </Label>
                            <img src={seisEjes} alt="seis ejes"/>
                        </FormGroup>
                    </Col>

                    </Row>
            </FormGroup>

            <h5 className="text-left">NÚMERO DEL TAG (Escriba cuidadosamente el número impreso en el tag Ej. E200XXXXXXX)</h5>

            <FormGroup>

            <FormGroup>
                    <Label for="exampleEmail">Número TAG</Label>
                    <Input 
                    type="text" 
                    name="placa" 
                    placeholder="Ingrese el número impreso en el tag Ej. E200XXXXXXX"
                    onChange={(e)=>{setNumTag(e.target.value)}}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="exampleEmail">Foto TAG</Label>
                    <Input type="file" name="fotoTag"/>
                </FormGroup>
            </FormGroup>

                <Button>Enviar</Button>
            </Form>
        </Container>
    );
}

export default FormTag;