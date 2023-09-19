import logo from "../assets/logo-footer.png";
import "../styles/Footer.scss";

function Footer() {
  return (
    <footer>
      <img src={logo} alt="Kasa" className="footer-logo" />
      <p className="footer-text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
