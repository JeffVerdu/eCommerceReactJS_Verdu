import React, { useEffect, useState } from "react";

import MovieCard from "./MovieCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ItemList({ movies, renderKey }) {
  const [sliderKey, setSliderKey] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
    setTimeout(() => {
      setVisible(true);
    }, 300);
    setSliderKey(renderKey);
  }, [renderKey]);

  const settings = {
    key: sliderKey,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
  };

  return (
    <section
      className={`py-5 container-box h-[400px] m-auto slider-container ${
        visible ? "opacity-100 transition-opacity duration-400" : "opacity-0"
      }`}
    >
      <Slider {...settings}>
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </Slider>
    </section>
  );
}

export default ItemList;
