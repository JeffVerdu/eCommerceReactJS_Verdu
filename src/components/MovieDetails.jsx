import React from "react";

function MovieDetails({ movie }) {
  console.log(movie.id);

  return <h1>AQUÍ VAN LOS DETALLES DE LA PELÍCULA: {movie.id}</h1>;
}

export default MovieDetails;
