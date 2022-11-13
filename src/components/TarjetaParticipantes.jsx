import hombre from '../assets/hombre.png'
import persona from '../assets/cuenta.png'
import mujer from '../assets/mujer.png'
import twitter from '../assets/gorjeo.png'

const TarjetaParticipantes = ( { data } ) => {
    {/** se obtienen los datos del participante  */}
    let avatar = data.avatar;
    let nombre = data.nombre;
    let apellido = data.apellido;
    let nombreUsuario = `${nombre.charAt(0)}${apellido}`;
    let ocupacion = data.ocupacion;
    let link = data.link;

    return (
        <>
        <div className="card" >
            <div className="card-body">
                <div className="row">
                    <div className="col-md-3 justify">
                    <img src={ avatar == "Hombre" ? hombre : avatar == "Mujer" ? mujer : persona } width='70' alt="Imagen avatar" />
                    </div>
                    <div className="col">
                        <h4>{nombre} {apellido}</h4>
                        <div className="row">
                            <div className="col-md-1">
                                <img src={twitter} alt="Logo Twitter" width='25' />
                            </div>
                            <div className="col">
                                <a href={link}><h5>@{nombreUsuario}</h5></a>
                            </div>
                        </div>
                        <p>{ocupacion}</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default TarjetaParticipantes