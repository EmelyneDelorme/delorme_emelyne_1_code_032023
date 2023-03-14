import logo from "../assets/logo-footer.png"
import "../styles/Footer.css"

function Footer() {
  return (
    <div className="footer">
      <img src={logo} alt="Kasa" className="footer-logo" />
      <p className="footer-text">© 2020 Kasa. All rights reserved</p>
    </div>
  )
}

export default Footer
