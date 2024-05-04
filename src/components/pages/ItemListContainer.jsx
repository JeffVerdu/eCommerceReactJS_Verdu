import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovies, getMoviesByGenre } from "../../utils/services";

import ItemList from "../ui/ItemList";

export default function ItemListContainer() {
  const params = useParams();
  const [nowPlaying, setNowPlaying] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    getMovies().then((movies) => {
      setNowPlaying(movies);
      if (params.category != undefined) {
        setFilteredMovies(getMoviesByGenre(movies, params.category));
      }
    });
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
        <ItemList
          movies={params.category != undefined ? filteredMovies : nowPlaying}
        />
      </>
    </div>
  );
}