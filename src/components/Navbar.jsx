
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/sobre-mi">Sobre</Link>
      <Link to="/habilidades">Habilidades</Link>
      <Link to="/proyectos">Proyectos</Link>
      <Link to="/contacto">Contacto</Link>
    </nav>
  )
}

export default Navbar
