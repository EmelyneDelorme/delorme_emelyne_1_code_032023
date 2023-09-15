import React, { useState } from "react";
import "../styles/SlideShow.css";

const SlideShow = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className="slideshow">
      <div className="arrows">
        <i className="fa-sharp fa-solid fa-chevron-left" onClick={prevSlide} />
        <i className="fa-sharp fa-solid fa-chevron-right" onClick={nextSlide} />
      </div>
      <p className="index">
        {current + 1}/{length}
      </p>
      {slides.map((slide, index) => {
        return (
          <div key={index}>
            {index === current && <img src={slide} alt="" className="slide" />}
          </div>
        );
      })}
    </section>
  );
};

export default SlideShow;
