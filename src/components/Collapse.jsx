import { useState } from "react";
import "../styles/Collapse.scss";

function Collapse({ children, collapseTitle }) {
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour basculer l'état isOpen
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  const arrowClass = isOpen ? "rotate-up" : "rotate-down";

  return (
    <div className="collapse">
      <div className="collapse-banner" onClick={toggleCollapse}>
        <p>{collapseTitle}</p>
        <i className={`fas fa-chevron-down ${arrowClass}`}></i>
      </div>
      {isOpen && <div className="collapse-text">{children}</div>}
    </div>
  );
}

export default Collapse;
