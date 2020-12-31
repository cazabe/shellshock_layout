import React, { useState } from 'react';
import api from '../../../../services/api';
import { Button, Form, FormGroup, Label, Input,Row, Col } from 'reactstrap';
import Container from 'reactstrap/lib/Container';
import './formEmp.style.css';

//images
import unEje from '../../../../Assets/un_eje-removebg-preview.png';
import dosEjes from '../../../../Assets/dos_ejes-removebg-preview.png';
import tresEjes from '../../../../Assets/tres_ejes-removebg-preview.png';
import cuatroEjes from '../../../../Assets/cuatro_ejes-removebg-preview.png';
import cincoEjes from '../../../../Assets/cinco_ejes-removebg-preview.png';
import seisEjes from '../../../../Assets/seis_ejes-removebg-preview.png';



const FormEmp = ({history}) => {
    //state for form
    const[concesion1, setconcesion1] = useState("");
    const[concesion2, setconcesion2] = useState("");
    const[concesion3, setconcesion3] = useState("");
    const[concesion4, setconcesion4] = useState("");
    const[nomrazonsocial, setNomRazonSocial] = useState("");
    const[nomreplegal, setNomRepLegal] = useState("");
    const[ruc, setRuc] = useState("");
    const[telefono, setTelefono] = useState("");
    const[correo, setCorreo] = useState("");
    const[fotocedula, setFotocedula] = useState("");
    //car
    const[placa, setPLaca] = useState("");
    const[marca, setMarca] = useState("");
    const[modelo, setModelo] = useState("");
    const[color, setColor] = useState("");
    //axis
    const[ejes, setEjes] = useState("");
    //tag
    const[numtag, setNumTag] = useState("");
    const[fototag, setFotoTag] = useState("");
    //data object
    // const[tagAccount, setTagAccount] = useState({});
    
    //submit form func
    const handleSubmit = async (e)=>{
        e.preventDefault();

        const formTagData = new FormData();

        formTagData.append("concesion1", concesion1);
        formTagData.append("concesion2", concesion2);
        formTagData.append("concesion3", concesion3);
        formTagData.append("concesion4", concesion4);
        formTagData.append("nomrazonsocial", nomrazonsocial);
        formTagData.append("nomreplegal", nomreplegal);
        formTagData.append("ruc", ruc);
        formTagData.append("telefono", telefono);
        formTagData.append("correo", correo);
        formTagData.append("fotocedula", fotocedula);
        formTagData.append("placa", placa);
        formTagData.append("marca", marca);
        formTagData.append("modelo", modelo);
        formTagData.append("color", color);
        formTagData.append("ejes", ejes);
        formTagData.append("numtag", numtag);
        formTagData.append("fototag", fototag);
       

        console.log("object: " , formTagData);
        console.log("file img: ", fotocedula);

        if(nomrazonsocial !== "" && nomreplegal !== "" && ruc !== "" && telefono !== "" && correo !== "" && fotocedula !== null && placa !== "" && marca !== "" &&  modelo !== "" && color !== "" && ejes !== "" && numtag !== "" && fototag !== null){
            try {
                const response = await api.post('/form/create-empresa',formTagData);
                
                if(response){
                    // window.location.href = '/';
                    console.log("formulario guardado empresa");
                    history.push('/response');
                }else{
                    console.log("Problemas al guardar el vehiculo de empresa");
                }
                // setTagAccount(actTag);
            } catch (error) {
                console.log(error);
            }
        }else{
            alert("Todos los datos del formulario son obligatorios");
        }
    }

    // console.log(tagAccount);

    return (
        <Container>
            <h1 className="text-center">FORMULARIO PARA ACTIVACIÓN U HOMOLOGACIÓN DEL TAG (EMPRESAS)</h1>
            <h2 className="text-center">Si adquirió el tag o ya dispone de otra estación de peaje llene los siguientes campos:</h2>
            
            <Form onSubmit={handleSubmit} encType="multipart/form-data">
                <h2 className="text-left">ACTIVAR TAG EN:</h2>

                <FormGroup check className="pt-3">
                    <Label check>
                        <Input type="checkbox" 
                        value="aloag"
                        onChange={(e)=>{setconcesion1(e.target.value)}}
                        />{' '}<p>Peaje Alóag</p>
                    </Label>
                </FormGroup>

                <FormGroup check className="pt-3">
                    <Label check>
                        <Input 
                        type="checkbox" 
                        value="conorte"
                        onChange={(e)=>{setconcesion2(e.target.value)}}
                        />{' '}
                        <p>Peajes CONORTE S.A. (Chivería, Yahuachi, Daule, Samborondón, La Cadena,Colimes, Guayas Norte)</p>
                    </Label>
                </FormGroup>

                <FormGroup check className="pt-3">
                    <Label check>
                        <Input type="checkbox" 
                        value="concegua"
                        onChange={(e)=>{setconcesion3(e.target.value)}}
                        />{' '}
                        <p>Peajes CONCEGUA S.A. (Boliche,Tambo,Milagro, El Triunfo, Naranjal,Naranjito)</p>
                    </Label>
                </FormGroup>

                <FormGroup check className="pt-3 mb-4">
                    <Label check>
                        <Input 
                        type="checkbox" 
                        value="el pan"
                        onChange={(e)=>{setconcesion4(e.target.value)}}
                        />{' '}
                        <p>Peaje PAN (El Pan)</p>
                    </Label>
                </FormGroup>

                <h5 className="text-left">DATOS PERSONA JURÍDICA (empresas)</h5>

                <FormGroup>
                    <Label for="exampleEmail">Razón social</Label>
                    <Input 
                    type="text" 
                    name="nombre" 
                    placeholder="Ingrese el nombre de la empresa" 
                    onChange={(e)=>{setNomRazonSocial(e.target.value)}}
                    required
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="examplePassword">Nombre del Representante Legal:</Label>
                    <Input 
                    type="text" 
                    name="representante" 
                    placeholder="Ingrese el nombre del representante legal"
                    onChange={(e)=>{setNomRepLegal(e.target.value)}}
                    required
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="examplePassword">Ruc</Label>
                    <Input 
                    type="text" 
                    name="ruc" 
                    placeholder="Ingrese el ruc de la empresa" 
                    onChange={(e)=>{setRuc(e.target.value)}}
                    required
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="examplePassword">Teléfono convencional o celular</Label>
                    <Input 
                    type="text" 
                    name="telefono" 
                    placeholder="Ingrese su teléfono" 
                    onChange={(e)=>{setTelefono(e.target.value)}}
                    required
                    />
                </FormGroup>

                <FormGroup className="mb-4">
                    <Label for="examplePassword">Email</Label>
                    <Input 
                    type="email" 
                    name="email" 
                    placeholder="Ingrese su correo" 
                    onChange={(e)=>{setCorreo(e.target.value)}}
                    required
                    />
                </FormGroup>

                <FormGroup className="mb-4">
                    <Label for="examplePassword">Suba una foto clara de anverso y reverso de la cédula del representante legal</Label>
                    <Input type="file"  onChange={(e)=> setFotocedula(e.target.files[0])} required/>
                </FormGroup>

                <h5 className="text-left">DATOS VEHÍCULO (consta en la matrícula) ANTE EL INTENTO DE FRAUDE SERÁ ELIMINADO</h5>

                <FormGroup>
                    <Label for="exampleEmail">Placa</Label>
                    <Input 
                    type="text" 
                    name="placa" 
                    placeholder="Ingrese el placa del vehículo"
                    onChange={(e)=>{setPLaca(e.target.value)}}
                    required
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="examplePassword">Marca</Label>
                    <Input 
                    type="text" 
                    name="marca" 
                    placeholder="Ingrese el marca del vehículo"
                    onChange={(e)=>{setMarca(e.target.value)}}
                    required
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="examplePassword">Modelo</Label>
                    <Input 
                    type="text" 
                    name="modelo" 
                    placeholder="Ingrese el modelo del vehículo" 
                    onChange={(e)=>{setModelo(e.target.value)}}
                    required
                    />
                </FormGroup>

                <FormGroup className="mb-4">
                    <Label for="examplePassword">Color</Label>
                    <Input 
                    type="text" 
                    name="color" 
                    placeholder="Ingrese el color del vehículo"
                    onChange={(e)=>{setColor(e.target.value)}}
                    required
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
                            value="un eje" 
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
                                value="dos ejes"
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
                                value="tres ejes"
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
                                value="cuatro ejes"
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
                                value="cinco ejes"
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
                                value="seis ejes"
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
                    required
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="exampleEmail">Suba una foto clara del tag</Label>
                    <Input type="file" onChange={(e)=> setFotoTag(e.target.files[0])} required/> 
                </FormGroup>
            </FormGroup>

                <Button>Enviar</Button>
            </Form>
        </Container>
    );
}

export default FormEmp;