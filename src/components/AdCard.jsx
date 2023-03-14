import "../styles/AdCard.css"

function AdCard({ id, cover, title }) {
  return (
    <li className="ad-card">
      <img src={cover} alt={`${title} cover`} />
      <h2>{title}</h2>
    </li>
  )
}

export default AdCard
