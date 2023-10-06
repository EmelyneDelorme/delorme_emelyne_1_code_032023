export default async function getHousings() {
  try {
    const res = await fetch("/ads.json");
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}
