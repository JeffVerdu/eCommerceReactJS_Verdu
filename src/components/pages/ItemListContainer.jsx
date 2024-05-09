import React from "react";
import { useEffect, useState } from "react";
import { useMatch, useParams } from "react-router-dom";
import { getMovies, getMoviesByGenre } from "../../utils/services";

import ItemList from "../ui/ItemList";
import { BackHome } from "../ui/BackHome";

export default function ItemListContainer() {
  const params = useParams();
  const [moviesList, setMoviesList] = useState([]);
  const [sliderKey, setSliderKey] = useState(0);
  const isCategoryPage = useMatch("/category/:category");

  useEffect(() => {
    if (params.category === undefined) {
      getMovies().then((movies) => {
        setMoviesList(movies);
      });
    } else {
      getMoviesByGenre(params.category).then((movies) => {
        setMoviesList(movies);
      });
    }

    setSliderKey(sliderKey + 1);
  }, [params.category]);

  return (
    <div
      className={`${
        params.category != undefined
          ? "page-background min-h-dvh mt-[-4rem] pt-[6rem]"
          : "bg-black h-auto pb-10"
      }`}
    >
      <div className="container-box">
        <h2 className="text-white font-bold text-lg ms-10 mb-1">Películas</h2>
        <ItemList movies={moviesList} renderKey={sliderKey} />
        <div className="text-center">{isCategoryPage && <BackHome />}</div>
      </div>
    </div>
  );
}
