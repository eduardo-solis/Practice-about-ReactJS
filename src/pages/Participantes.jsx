import BarraNavegacion from "../components/BarraNavegacion"
import TarjetaParticipantes from "../components/TarjetaParticipantes"

const Participantes = () => {
    return (
        <>
        <BarraNavegacion/>
        <div className="container-fluid">
            <TarjetaParticipantes/>
        </div>
        
        </>
    )
}

export default Participantes