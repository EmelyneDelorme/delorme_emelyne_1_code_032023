import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Collapse from "../../components/Collapse";
import SlideShow from "../../components/SlideShow";
import getHousingById from "../../helpers/getHousingById";
import "../../styles/Housing.scss";
import NotFound from "../NotFound";

function Housing() {
  const { id } = useParams();
  const [ad, setAd] = useState(null);

  const getStars = () => {
    const stars = Array(5)
      .fill("full", 0, ad.rating)
      .fill("empty", ad.rating, 5);

    return (
      <ul className="rating">
        {stars.map((star, i) => (
          <li key={i}>
            {star === "full" ? (
              <i className="fa-solid fa-star"></i>
            ) : (
              <i className="fa-regular fa-star"></i>
            )}
          </li>
        ))}
      </ul>
    );
  };

  useEffect(() => {
    document.title = `KASA - ${ad?.title}`;
  }, [ad]);

  useEffect(() => {
    const setHousing = async () => {
      try {
        const data = await getHousingById(id);
        setAd(data);
      } catch {
        console.log("erreur");
      }
    };
    setHousing();
  }, [id]);

  if (!ad) {
    return <NotFound />;
  }
  return (
    <main>
      <SlideShow slides={ad.pictures} />
      <div className="intro">
        <div className="title-tags">
          <div>
            <h1>{ad.title}</h1>
            <p className="location">{ad.location}</p>
          </div>
          <ul className="tags">
            {ad.tags.map((tag) => (
              <li key={tag} className="tag">
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div className="person-rating">
          <div className="person">
            <p className="name">{ad.host.name}</p>
            <img className="picture" src={ad.host.picture} alt={ad.host.name} />
          </div>
          {ad.rating && getStars()}
        </div>
      </div>
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
