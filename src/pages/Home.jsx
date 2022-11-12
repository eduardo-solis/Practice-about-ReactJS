import { useNavigate } from "react-router-dom"
import BarraNavegacion from "../components/BarraNavegacion"
import logoCNTic from '../assets/cnTic.png'
import logoUTL from '../assets/utl.png'

const Home = () => {

    let navigation = useNavigate()

    return (
        <>
        <BarraNavegacion/>
        
        <div className="container-fluid text-center mt-2">
            <h3 className="display-2">Congreso Nacional Nuestras TIC's</h3>
            <br />
            <h5>Ahora en la Universidad Tecnologica de León</h5>
            <br />
            <div className="row justify-content-center">
                <div className="col-md-6" style={{ width: 250}}>
                    <img src={logoUTL} alt="Logo de la UTL" className="img-fluid" />
                </div>
                <div className="col-md-6" style={{ width: 355}}>
                    <img src={logoCNTic} alt="Logo de la CNTics" className="img-fluid" />
                </div>
            </div>
        </div>

        <div className="container-fluid mt-5">
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <p className="card-text">
                            El evento académico que reune anualmente a los Docentes Apasionados por las TIC en el Aula de Clase.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 d-grid">
                    <button onClick={ () => navigation("/participantes") } className="btn btn-outline-primary btn-lg" >Registrate ahora!</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home