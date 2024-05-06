import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovies, getMoviesByGenre } from "../../utils/services";

import ItemList from "../ui/ItemList";

export default function ItemListContainer() {
  const params = useParams();
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    //Si no se selecciona una categoría, no se envía por url, así que se obtienen todas las películas
    if (params.category === undefined) {
      getMovies().then((movies) => {
        setMoviesList(movies);
      });
    } else {
      //Si se selecciona una categoría, se envía por url y se obtienen las películas de esa categoría
      getMoviesByGenre(params.category).then((movies) => {
        setMoviesList(movies);
      });
    }
  }, [params]);

  return (
    <div
      className={`${
        params.category != undefined
          ? "page-background min-h-dvh mt-[-4rem] pt-[6rem]"
          : "bg-black h-auto pb-10"
      }`}
    >
      <>
        <h2 className="text-white font-bold text-lg ms-44 mb-1">Películas</h2>
        <ItemList movies={moviesList} />
      </>
    </div>
  );
}
