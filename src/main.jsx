import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Hero from './pages/Hero'
import Sobre from './pages/Sobre'
import Tecnologias from './pages/Tecnologias'
import Proyectos from './pages/Proyectos'
import Contacto from './pages/Contacto'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hero />
    <Sobre />
    <Tecnologias />
    <Proyectos />
    <Contacto />

  </StrictMode>
)
