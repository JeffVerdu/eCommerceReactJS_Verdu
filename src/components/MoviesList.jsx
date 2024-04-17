import React from "react";
import MovieCard from "./ui/MovieCard";

function MoviesList({ movies }) {
  return (
    <section className="flex gap-2 py-5 px-6 container-box h-400px overflow-x-scroll movie-list">
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </section>
  );
}

export default MoviesList;
