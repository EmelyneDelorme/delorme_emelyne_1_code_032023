import { Link } from "react-router-dom"
import logo from "../assets/logo.png"
import "../styles/Header.css"

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="Kasa" className="header-logo" />
      <nav>
        <ul className="header-nav">
          <li>
            <Link to="/">Accueil</Link>
          </li>

          <li>
            <Link to="/about">A Propos</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
