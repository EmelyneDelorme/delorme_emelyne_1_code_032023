import "../styles/Banner.scss";

function Banner({ banner, title }) {
  return (
    <div className="banner">
      <div className="background">
        <img className="banner-img" src={banner} alt="paysage" />
      </div>
      <h1 className="banner-title">{title}</h1>
    </div>
  );
}

export default Banner;
