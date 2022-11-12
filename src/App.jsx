import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import RegistroPraticipante from './pages/RegistroPraticipante'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Home/> } />
      <Route path='/participantes' element={ <h1>Participantes</h1> } />
      <Route path='/participantes/registrar' element={ <RegistroPraticipante/> } />
      <Route path='/participantes/editar' element={ <h1>Editar Participante</h1> } />
      <Route path='*' element={ <h1>Error 404: Pagina no encontrada</h1> } />
    </Routes>
    </BrowserRouter>
  )
}

export default App