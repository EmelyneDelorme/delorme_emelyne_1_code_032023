import { ads } from "../datas/ads"

export default function getHousingById(id) {
  return ads.find((ad) => ad.id === id)
}
