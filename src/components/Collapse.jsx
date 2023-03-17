import { useState } from "react"
import "../styles/Collapse.css"

function Collapse({ children, collapseTitle }) {
  const [isOpen, setIsOpen] = useState(false)
  return isOpen ? (
    <div className="collapse">
      <div className="collapse-banner" onClick={() => setIsOpen(false)}>
        <p>{collapseTitle}</p>
        <i className="fa-sharp fa-solid fa-chevron-up"></i>
      </div>
      <div className="collapse-text">{children}</div>
    </div>
  ) : (
    <div className="collapse">
      <div className="collapse-banner" onClick={() => setIsOpen(true)}>
        <p>{collapseTitle}</p>
        <i className="fas fa-chevron-down"></i>
      </div>
    </div>
  )
}

export default Collapse