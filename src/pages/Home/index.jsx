import Banner from "../../components/Banner"
import AdCard from "../../components/AdCard"
import { ads } from "../../datas/ads"
import img from "../../assets/home-banner.png"
import "../../styles/Home.css"

function Home() {
  return (
    <div>
      <Banner banner={img} title="Chez vous, partout ailleurs" />
      <ul className="ads-list">
        {ads.map(({ id, cover, title }) => (
          <AdCard key={id} id={id} cover={cover} title={title} />
        ))}
      </ul>
    </div>
  )
}

export default Home
