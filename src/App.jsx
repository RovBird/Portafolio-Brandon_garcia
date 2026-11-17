import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Hero from './pages/Hero'
import Sobre from './pages/Sobre'
import Proyectos from './pages/Proyectos'
import Tecnologias from './pages/Tecnologias'
import Contacto from './pages/Contacto'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/sobre-mi" element={<Sobre />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/Tecnologias" element={<Tecnologias />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App