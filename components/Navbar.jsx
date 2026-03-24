import { NavLink } from 'react-router-dom'

const linkClass = ({ isActive }) => (isActive ? 'btn-primary' : 'btn')

export default function Navbar() {

  return (
    <header className="navbar">
      <nav>
        <NavLink to="/" end className={linkClass}>
          Home
        </NavLink>
        <NavLink to="/contact" className={linkClass}>
          Contact
        </NavLink>
        <NavLink to="/projects" className={linkClass}>
          Projects
        </NavLink>
        <NavLink to="/experience" className={linkClass}>
          Experience
        </NavLink>
      </nav>
    </header>
  )
}
