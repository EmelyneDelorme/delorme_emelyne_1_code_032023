import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import AdCard from "../../components/AdCard";
import img from "../../assets/home-banner.png";
import "../../styles/Home.scss";
import getHousings from "../../helpers/getHousings";

function Home() {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    document.title = "Kasa - Accueil";
  }, []);

  const setHousings = async () => {
    try {
      const data = await getHousings();
      setAds(data);
    } catch {
      console.log("erreur");
    }
  };
  useEffect(() => {
    setHousings();
  }, [setAds]);

  return (
    <main>
      <Banner banner={img} title="Chez vous, partout et ailleurs" />
      <ul className="ads-list">
        {ads.map(({ id, cover, title }) => (
          <AdCard key={id} id={id} cover={cover} title={title} />
        ))}
      </ul>
    </main>
  );
}

export default Home;
