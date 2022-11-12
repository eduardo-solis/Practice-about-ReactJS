import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Participantes from './pages/Participantes'
import RegistroParticipante from './pages/RegistroPraticipante'
import EditarParticipante from './pages/EditarParticipante'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Home/> } />
      <Route path='/participantes' element={ <Participantes/> } />
      <Route path='/participantes/registrar' element={ <EditarParticipante/> } />
      <Route path='/participantes/editar' element={ <RegistroParticipante/> } />
      <Route path='*' element={ <h1>Error 404: Pagina no encontrada</h1> } />
    </Routes>
    </BrowserRouter>
  )
}

export default App