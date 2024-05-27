import React, { useEffect, useState } from "react";

import MovieCard from "./MovieCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Skeleton } from "@nextui-org/react";

function ItemList({ movies, renderKey }) {
  const [sliderKey, setSliderKey] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
    setSliderKey(renderKey);
  }, [renderKey]);

  const settings = {
    key: sliderKey,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <section className={`py-5 h-[300px] m-auto text-center`}>
      <Slider {...settings}>
        {movies.map((movie, index) => (
          <Skeleton
            key={index}
            isLoaded={isLoaded}
            className={`rounded-xl bg-zinc-400 `}
          >
            <MovieCard movie={movie} key={index} />
          </Skeleton>
        ))}
      </Slider>
    </section>
  );
}

export default ItemList;
