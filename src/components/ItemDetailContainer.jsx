import React, { useEffect } from "react";
import { useState } from "react";

import API from "../config/Api.jsx";
import MovieDetails from "./MovieDetails.jsx";

function ItemDetailContainer({ idMovie }) {
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MjY4NjJhMmVjZDE0ODVkMWFkNDU5OTFjNjRhMzRiNyIsInN1YiI6IjY0NDQwNTE2Y2VlMmY2MDRmMzM2Y2M5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MvZyfuvIP0cYNeT1AWDgVcFCNXFT8HyrZTSM7BU_YOc",
      },
    };

    fetch(`${API.URL}/${idMovie}?language=en-US`, options)
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails(data);
      })
      .catch((error) => console.log(error));
  }, [idMovie]);

  return (
    <>
      <MovieDetails movie={movieDetails} />
    </>
  );
}

export default ItemDetailContainer;
