import React, { useEffect } from "react";
import Banner from "../../components/Banner";
import AdCard from "../../components/AdCard";
import { ads } from "../../datas/ads";
import img from "../../assets/home-banner.png";
import "../../styles/Home.scss";

function Home() {
  useEffect(() => {
    document.title = "Kasa - Accueil";
  }, []);

  return (
    <main>
      <Banner banner={img} title="Chez vous, partout ailleurs" />
      <ul className="ads-list">
        {ads.map(({ id, cover, title }) => (
          <AdCard key={id} id={id} cover={cover} title={title} />
        ))}
      </ul>
    </main>
  );
}

export default Home;
