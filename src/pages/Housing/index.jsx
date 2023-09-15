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
      <h1>{ad.title}</h1>
      <p>{ad.location}</p>
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
