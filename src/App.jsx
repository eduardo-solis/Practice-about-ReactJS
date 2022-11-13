import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Participantes from './pages/Participantes'
import RegistroParticipante from './pages/RegistroPraticipante'
import EditarParticipante from './pages/EditarParticipante'
import ParticipanteProvider from './context/ParticipanteProvider'

const App = () => {
  return (
    <ParticipanteProvider>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Home/> } />
      <Route path='/participantes' element={ <Participantes/> } />
      <Route path='/participantes/registrar' element={ <RegistroParticipante/> } />
      <Route path='/participantes/editar' element={ <EditarParticipante/> } />
      <Route path='*' element={ <h1>Error 404: Pagina no encontrada</h1> } />
    </Routes>
    </BrowserRouter>
    </ParticipanteProvider>
  )
}

export default App