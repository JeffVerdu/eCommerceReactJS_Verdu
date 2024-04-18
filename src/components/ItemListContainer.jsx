import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import API from "../config/Api";
import MoviesList from "./ui/MoviesList";

export default function ItemListContainer({ params }) {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MjY4NjJhMmVjZDE0ODVkMWFkNDU5OTFjNjRhMzRiNyIsInN1YiI6IjY0NDQwNTE2Y2VlMmY2MDRmMzM2Y2M5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MvZyfuvIP0cYNeT1AWDgVcFCNXFT8HyrZTSM7BU_YOc",
      },
    };

    fetch(`${API.URL}/now_playing`, options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        setNowPlaying(data.results);
        if (params.category != undefined) {
          const filteredMovies = data.results.filter((movie) =>
            movie.genre_ids.includes(parseInt(params.category))
          );
          setFilteredMovies(filteredMovies);
          console.log(filteredMovies);
        }
      })
      .catch((error) => console.log(error));
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
