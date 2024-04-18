import API from "../../config/Api";
import React from "react";

function MovieDetails({ movie }) {
  console.log(movie.id);

  return (
    <>
      <section
        className="details"
        style={{
          backgroundImage: `url(${API.IMAGE_BACKGROUND}${movie.backdrop_path})`,
        }}
      >
        <div className="details-grid">
          <div className="movie-poster">
            <img src={`${API.IMAGE}${movie.poster_path}`} alt="" />
          </div>
          <div className="movie-info"></div>
        </div>
      </section>
    </>
  );
}

export default MovieDetails;
