import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Collapse from "../../components/Collapse";
import SlideShow from "../../components/SlideShow";
import getHousingById from "../../helpers/getHousingById";
import "../../styles/Housing.css";

function Housing() {
  const { id } = useParams();
  const ad = getHousingById(id);

  useEffect(() => {
    document.title = `Kasa - ${ad.title}`;
  }, [ad.title]);

  return (
    <main>
      <SlideShow slides={ad.pictures} />
      <div className="title">
        <div>
          <h1>{ad.title}</h1>
          <p className="location">{ad.location}</p>
        </div>
        <div className="person">
          <p className="name">{ad.host.name}</p>
          <img className="picture" src={ad.host.picture} alt={ad.host.name} />
        </div>
      </div>

      <ul className="tags">
        {ad.tags.map((tag) => (
          <li key={tag} className="tag">
            {tag}
          </li>
        ))}
      </ul>
      <div className="housing-collapses">
        <Collapse collapseTitle="Description">
          <p>{ad.description}</p>
        </Collapse>
        <Collapse collapseTitle="Equipements">
          <ul>
            {ad.equipments.map((equipment) => (
              <li key={equipment}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </main>
  );
}

export default Housing;
