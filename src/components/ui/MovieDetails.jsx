import API from "../../config/Api";
import React from "react";

function MovieDetails({ movie }) {
  return (
    <>
      <section className="details">
        <div
          className="details-container"
          style={{
            backgroundImage: `url(${API.IMAGE_BACKGROUND}${movie.backdrop_path})`,
          }}
        ></div>
        <div className="details-grid grid grid-cols-2 container-box justify-center items-center">
          <img
            src={`${API.IMAGE}${movie.poster_path}`}
            alt={`${movie.title}`}
            className="rounded-3xl shadow inline-block w-auto h-[28rem] object-contain my-0 mx-auto"
          />
          <div className="movie-inf text-white">
            <h2 className="text-3xl font-black">{movie.title}</h2>
            <p className="mb-4">Fecha de lanzamiento: {movie.release_date}</p>
            <p className="leading-8 text-lg">{movie.overview}</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default MovieDetails;
