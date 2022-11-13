import TarjetaParticipantes from "./TarjetaParticipantes"

import { ParticipanteContext } from '../context/ParticipanteContext'
import { useEffect, useContext } from "react";

const ListaParticipantes = () => {

    const {
        state: { participantes, cargando },
        obtenerParticipantes
    } = useContext(ParticipanteContext);

    useEffect(() => {
        obtenerParticipantes();
    }, [participantes])

    return (
        <div className="container-fluid">
            <div className="card border-primary mt-3">
                <div className="card-header">Lista de Participantes</div>
                <div className="card-body overflow-scroll" style={{ height: 500 }}>
                    <div className="row">

                        {
                            participantes.length > 0 ?
                                participantes.map((participante) => {
                                    return <div key={participante.id} className="col-4 mb-3">
                                        <TarjetaParticipantes key={participante.id} data={participante} />
                                    </div>
                                })
                                :
                                (
                                    <>
                                        <div className="spinner-border text-primary" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>

                                    </>
                                )
                        }

                        {/** Usar esta forma de imprimir las tarjetas */}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListaParticipantes