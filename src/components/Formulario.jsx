import { useNavigate } from 'react-router-dom'
import hombre from '../assets/hombre.png'
import mujer from '../assets/mujer.png'
import persona from '../assets/cuenta.png'

const Formulario = () => {

    const navigation = useNavigate()

    const registrar = () => {
        navigation("/participantes")
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
                                    <input type="text" className="form-control" id="nombre" placeholder="Nombre" />
                                    <label htmlFor="nombre">Nombre</label>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="apellidos" placeholder="Apellidos" />
                                    <label htmlFor="apellidos">Apellidos</label>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col">
                                <div className="form-floating">
                                    <input type="email" className="form-control" id="email" placeholder="Email" />
                                    <label htmlFor="email">Email</label>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-floating">
                                    <input type="url" className="form-control" id="twitter" placeholder="Twitter" />
                                    <label htmlFor="twitter">Twitter</label>
                                </div>
                            </div>
                        </div>

                        <div className="form-floating mt-3">
                            <input type="text" className="form-control" id="ocupacion" placeholder="Ocupacion" />
                            <label htmlFor="ocupacion">Ocupacion</label>
                        </div>

                        {/** Imagenes de los avatares */}
                        <div className="row mt-3">
                            <div className="col">
                                <div className="form-check">
                                    <input type="radio" name="avatar" value="Hombre" id="hombre" className="form-check-input" />
                                    <label class="form-check-label" htmlFor="hombre">
                                        Hombre
                                        <br />
                                        <img src={hombre} alt="Hombre" width='75' />
                                    </label>
                                </div>
                            </div>

                            <div className="col">
                                <div className="form-check">
                                    <input type="radio" name="avatar" value='Persona' id="persona" className="form-check-input" />
                                    <label class="form-check-label" htmlFor="persona">
                                        Persona
                                        <br />
                                        <img src={persona} alt="Persona" width='75' />
                                    </label>
                                </div>
                            </div>

                            <div className="col">
                                <div className="form-check">
                                    <input type="radio" name="avatar" value='Mujer' id="mujer" className="form-check-input" />
                                    <label class="form-check-label" htmlFor="mujer">
                                        Mujer
                                        <br />
                                        <img src={mujer} alt="Mujer" width='75' />
                                    </label>
                                </div>
                            </div>
                        </div>


                        {/** Checkbox */}
                        <div class="form-check mt-3">
                            <input type="checkbox" name="terminos" id="terminos" value="0" className="form-check-input" />
                            <label class="form-check-label" htmlFor="terminos">
                                Aceptar Terminos y Condiciones
                            </label>
                        </div>


                        <div className="mt-3 d-grid">
                            <button onClick={ () => registrar() } className="btn btn-outline-primary btn-lg">Registrarse</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Formulario