import React from "react";
import { Card, Image } from "@nextui-org/react";
import { Link } from "react-router-dom";
import IMAGES_API from "../../config/Api";

function MovieCard({ movie }) {
  return (
    <Card className="border-none flex-shrink-0 bg-black">
      <Link to={`/details/${movie.movie_id}`}>
        <Image
          alt={movie.title}
          src={IMAGES_API.IMAGE + movie.poster_path}
          className="object-fill h-56 w-40 hover:scale-105 ease-in-out duration-300 transform"
        />
      </Link>
    </Card>
  );
}

export default MovieCard;
