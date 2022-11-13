import { useNavigate } from 'react-router-dom'
import hombre from '../assets/hombre.png'
import mujer from '../assets/mujer.png'
import persona from '../assets/cuenta.png'

import { ParticipanteContext } from '../context/ParticipanteContext'
import { useContext, useState } from "react";

const Formulario = () => {

    const { registrarParticipante } = useContext(ParticipanteContext);

    const navigation = useNavigate()

    const [formulario, setFormulario] = useState({
        Nombre: "",
        Apellido: "",
        Email: "",
        Avatar: "",
        Link: "",
        Ocupacion: ""
    });

    const { Nombre, Apellido, Email, Avatar, Link, Ocupacion } = formulario;

    const handleChange = (e) => {
        setFormulario(
            {
                ...formulario,
                [e.target.name]: e.target.value
            }
        );
    }

    const registrar = () => {
        
        let cb = document.getElementById("terminos").checked;

        if (cb) {
            console.log(Nombre);
            if(estaValidado()){
                registrarParticipante(Nombre, Apellido, Email, Avatar, Link, Ocupacion)
                limpiarFormulario()
                navigation("/participantes")
            }
            
        }
        else {
            alert("No aceptados");
        }
    }

    const limpiarFormulario = () => {

        let arRadioBtn = document.getElementsByName("Avatar");
        

        setFormulario({
            Nombre: "",
            Apellido: "",
            Email: "",
            Avatar: "",
            Link: "",
            Ocupacion: ""
        })

        for (let ii = 0; ii < arRadioBtn.length; ii++) {
            let radButton = arRadioBtn[ii];
            radButton.checked = false;
        }

        document.getElementById("terminos").checked = false
    }

    const estaValidado = () => {

        if (Nombre == ""){
            alert("El campo Nombre no puede estar vacio")
            return false
        }
        if (Apellido == ""){
            alert("El campo Apellido no puede estar vacio")
            return false
        }
        if (Email == ""){
            alert("El campo Email no puede estar vacio")
            return false
        }
        if (Avatar == ""){
            alert("Debe seleccionar un avatar")
            return false
        }
        if (Link == ""){
            alert("El campo Link de Twitter no puede estar vacio")
            return false
        }
        if (Ocupacion == ""){
            alert("El campo Ocupacion no puede estar vacio")
            return false
        }

        return true

    }

    return (
        <>
            <div className="container-fluid mt-5">
                <div className="card">
                    <div className="card-header">
                        <h5 className="card-title">Registro del participante</h5>
                    </div>
                    <div className="card-body">
                        {/** Datos del participante */}
                        <div className="row">
                            <div className="col">
                                <div className="form-floating">
                                    <input type="text" onChange={(e) => handleChange(e)} className="form-control" name='Nombre' value={Nombre} id="nombre" placeholder="Nombre" />
                                    <label htmlFor="nombre">Nombre</label>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-floating">
                                    <input type="text" onChange={(e) => handleChange(e)} className="form-control" name='Apellido' value={Apellido} id="apellidos" placeholder="Apellidos" />
                                    <label htmlFor="apellidos">Apellidos</label>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col">
                                <div className="form-floating">
                                    <input type="email" onChange={(e) => handleChange(e)} className="form-control" name='Email' value={Email} id="email" placeholder="Email" />
                                    <label htmlFor="email">Email</label>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-floating">
                                    <input type="url" onChange={(e) => handleChange(e)} className="form-control" name='Link' value={Link} id="twitter" placeholder="Twitter" />
                                    <label htmlFor="twitter">Link de tu perfil de Twitter</label>
                                </div>
                            </div>
                        </div>

                        <div className="form-floating mt-3">
                            <input type="text" onChange={(e) => handleChange(e)} className="form-control" id="ocupacion" name='Ocupacion' value={Ocupacion} placeholder="Ocupacion" />
                            <label htmlFor="ocupacion">Ocupacion</label>
                        </div>

                        {/** Imagenes de los avatares */}
                        <div className="row mt-3">
                            <div className="col">
                                <div className="form-check">
                                    <input type="radio" name="Avatar" onChange={(e) => handleChange(e)} value="Hombre" id="hombre" className="form-check-input" />
                                    <label className="form-check-label" htmlFor="hombre">
                                        Hombre
                                        <br />
                                        <img src={hombre} alt="Hombre" width='75' />
                                    </label>
                                </div>
                            </div>

                            <div className="col">
                                <div className="form-check">
                                    <input type="radio" name="Avatar" onChange={(e) => handleChange(e)} value='Persona' id="persona" className="form-check-input" />
                                    <label className="form-check-label" htmlFor="persona">
                                        Persona
                                        <br />
                                        <img src={persona} alt="Persona" width='75' />
                                    </label>
                                </div>
                            </div>

                            <div className="col">
                                <div className="form-check">
                                    <input type="radio" name="Avatar" onChange={(e) => handleChange(e)} value='Mujer' id="mujer" className="form-check-input" />
                                    <label className="form-check-label" htmlFor="mujer">
                                        Mujer
                                        <br />
                                        <img src={mujer} alt="Mujer" width='75' />
                                    </label>
                                </div>
                            </div>
                        </div>


                        {/** Checkbox */}
                        <div className="form-check mt-3">
                            <input type="checkbox" name="terminos" id="terminos" className="form-check-input" />
                            <label className="form-check-label" htmlFor="terminos">
                                Aceptar Terminos y Condiciones
                            </label>
                        </div>


                        <div className="mt-3 d-grid">
                            <button onClick={() => registrar()} className="btn btn-outline-primary btn-lg">Registrarse</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Formulario