import React from "react";
import { useEffect, useState } from "react";
import { useMatch, useParams } from "react-router-dom";
import {
  getCategories,
  getMovies,
  getMoviesByCategory,
} from "../../utils/services";

import ItemList from "../ui/ItemList";
import { BackHome } from "../ui/BackHome";

export default function ItemListContainer() {
  const params = useParams();
  const [moviesList, setMoviesList] = useState([]);
  const [sliderKey, setSliderKey] = useState(0);
  const isCategoryPage = useMatch("/category/:category");
  const [category, setCategory] = useState([]);

  useEffect(() => {
    if (params.category === undefined) {
      getMovies().then((movies) => {
        setMoviesList(movies);
      });
    } else {
      getMoviesByCategory(params.category).then((movies) => {
        setMoviesList(movies);
      });
      getCategories().then((categories) => {
        const categoryName = categories.find(
          (category) => category.key === params.category
        );
        setCategory(categoryName.name);
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
        <h2 className="text-white font-bold text-lg ms-10 mb-1">
          {isCategoryPage ? category : "Películas en cartelera"}
        </h2>
        <ItemList movies={moviesList} renderKey={sliderKey} />
        <div className="text-center">{isCategoryPage && <BackHome />}</div>
      </div>
    </div>
  );
}
