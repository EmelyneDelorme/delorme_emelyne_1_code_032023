import { Link } from "react-router-dom"
import "../../styles/NotFound.css"

function NotFound() {
  return (
    <div>
      <h1 className="error-title">404</h1>
      <p className="error-text">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </div>
  )
}

export default NotFound
