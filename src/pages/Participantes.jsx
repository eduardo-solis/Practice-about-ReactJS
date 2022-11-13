import { useNavigate } from "react-router-dom"
import BarraNavegacion from "../components/BarraNavegacion"
import ListaParticipantes from '../components/ListaParticipantes'

import { ParticipanteContext } from '../context/ParticipanteContext'
import { useContext } from "react";

const Participantes = () => {

    const {
        limpiarParticipante
    } = useContext(ParticipanteContext);

    const navigation = useNavigate();

    const agregar = () => {
        limpiarParticipante();
        navigation("/participantes/registrar")
    }

    return (
        <>
            <BarraNavegacion />
            <div className=" container-fluid d-flex justify-content-end mt-3">
                <button onClick={() => agregar() } className='btn btn-success' >Agregar</button>
            </div>
            <ListaParticipantes />
        </>
    )
}

export default Participantes