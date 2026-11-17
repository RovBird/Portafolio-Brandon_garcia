import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Inicio from './pages/Inicio'
import Sobre from './pages/Sobre'
import Proyectos from './pages/Proyectos'
import Tecnologias from './pages/Tecnologias'
import Contacto from './pages/Contacto'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobre-mi" element={<Sobre />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/Tecnologias" element={<Tecnologias />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App