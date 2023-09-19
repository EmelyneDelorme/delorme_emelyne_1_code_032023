import { Link } from "react-router-dom";
import "../styles/AdCard.scss";

function AdCard({ id, cover, title }) {
  return (
    <li className="ad-card">
      <Link to={"housing/" + id}>
        <img src={cover} alt={`${title} cover`} />
        <h2>{title}</h2>
      </Link>
    </li>
  );
}

export default AdCard;
