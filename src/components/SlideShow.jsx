import { Link } from "react-router-dom"

function SlideShow({ img, nextHousing }) {
  return (
    <>
      <Link to={"housing/" + nextHousing}>
        <i className="fa-sharp fa-solid fa-chevron-left"></i>
      </Link>
      <img src={img} alt="interieur d'un appartement" />
      <i className="fa-sharp fa-solid fa-chevron-right"></i>
    </>
  )
}

export default SlideShow
