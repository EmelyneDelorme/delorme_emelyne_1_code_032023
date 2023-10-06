import getHousings from "./getHousings";

export default async function getHousingById(id) {
  const ads = await getHousings();
  return ads.find((ad) => ad.id === id);
}
