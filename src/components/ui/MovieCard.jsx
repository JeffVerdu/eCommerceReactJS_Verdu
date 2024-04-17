import React from "react";
import { Card, CardFooter, Image } from "@nextui-org/react";
import { Link } from "react-router-dom";
import API from "../../config/Api";

function MovieCard({ movie }) {
  return (
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none flex-shrink-0 w-40 h-56"
    >
      <Image
        alt={movie.title}
        className="object-cover"
        src={API.IMAGE + movie.poster_path}
      />
      <CardFooter className="block border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 shadow-small ml-1 z-10">
        <Link to={`/${movie.id}`}>
          <p className="text-tiny text-white text-center block w-full">
            {movie.title}
          </p>
        </Link>
      </CardFooter>
    </Card>
  );
}

export default MovieCard;
