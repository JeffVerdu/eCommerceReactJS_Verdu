import React from "react";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import API from "../config/Api";
import MoviesList from "./MoviesList";

export default function ItemListContainer() {
  const [topRated, setTopRated] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [popular, setPopular] = useState([]);

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
        setNowPlaying(data.results);
      })
      .catch((error) => console.log(error));

    fetch(`${API.URL}/popular`, options)
      .then((response) => response.json())
      .then((data) => setPopular(data.results))
      .catch((error) => console.log(error));

    fetch(`${API.URL}/top_rated`, options)
      .then((response) => response.json())
      .then((data) => setTopRated(data.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="h-auto bg-black pb-10">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h2 className="text-white font-bold text-lg ms-44 mb-1">
                Ahora en cines
              </h2>
              <MoviesList movies={nowPlaying} />
            </>
          }
        />
      </Routes>
    </div>
  );
}
