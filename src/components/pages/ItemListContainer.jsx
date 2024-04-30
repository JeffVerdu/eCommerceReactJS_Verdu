import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovies } from "../../utils/dbqueries";

import MoviesList from "../ui/MoviesList";

export default function ItemListContainer() {
  const params = useParams();
  const [nowPlaying, setNowPlaying] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    getMovies().then((movies) => {
      setNowPlaying(movies);
      if (params.category != undefined) {
        const filteredMovies = movies.filter((movie) =>
          movie.genres_ids.includes(parseInt(params.category))
        );
        setFilteredMovies(filteredMovies);
      }
    });
  }, [params]);

  return (
    <div className="h-auto bg-black pb-10 pt-10">
      <>
        <h2 className="text-white font-bold text-lg ms-44 mb-1">Películas</h2>
        <MoviesList
          movies={params.category != undefined ? filteredMovies : nowPlaying}
        />
      </>
    </div>
  );
}
