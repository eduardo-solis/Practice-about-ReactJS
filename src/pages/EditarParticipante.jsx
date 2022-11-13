import BarraNavegacion from "../components/BarraNavegacion"
import Formulario from "../components/Formulario"

import { ParticipanteContext } from '../context/ParticipanteContext'
import { useContext } from "react";

import { Navigate } from 'react-router-dom';

const EditarParticipante = () => {

    const {
        state: { participanteObtenido }
    } = useContext(ParticipanteContext);

    if ( !participanteObtenido ){
        return <Navigate to="/participantes" />
    }

    return (
        <>
            <BarraNavegacion />
            <Formulario nuevo={false} />
        </>
    )
}

export default EditarParticipante