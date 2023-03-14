import { Link } from "react-router-dom"
import Banner from "../../components/Banner"
import AdCard from "../../components/AdCard"
import { ads } from "../../datas/ads"
import "../../styles/Home.css"

function Home() {
  return (
    <div>
      <Banner />
      <ul className="ads-list">
        {ads.map(({ id, cover, title }) => (
          <Link key={id} to={"housing/" + id}>
            <AdCard cover={cover} title={title} />
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default Home
