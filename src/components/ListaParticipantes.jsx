import TarjetaParticipantes from "./TarjetaParticipantes"

const ListaParticipantes = () => {
    return (
        <div className="container-fluid">
            <div className="card mt-3">
                <div className="card-header">Lista de Participantes</div>
                <div className="card-body">
                    <div className="row">
                        {/** Usar esta forma de imprimir las tarjetas */}
                        <div className="col-4 mb-3">
                            <TarjetaParticipantes />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListaParticipantes