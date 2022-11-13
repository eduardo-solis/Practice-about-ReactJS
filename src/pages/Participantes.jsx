import { useNavigate } from "react-router-dom"
import BarraNavegacion from "../components/BarraNavegacion"
import ListaParticipantes from '../components/ListaParticipantes'

const Participantes = () => {
    const navigation = useNavigate();

    return (
        <>
            <BarraNavegacion />
            <div className=" container-fluid d-flex justify-content-end mt-3">
                <button onClick={() => navigation("/participantes/registrar")} className='btn btn-outline-success' >Agregar</button>
            </div>
            <ListaParticipantes />
        </>
    )
}

export default Participantes