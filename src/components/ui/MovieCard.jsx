import React from "react";
import { Card, CardFooter, Image } from "@nextui-org/react";
import { Link } from "react-router-dom";
import API from "../../config/Api";

function MovieCard({ movie }) {
  return (
    <Card className="border-none flex-shrink-0 bg-black">
      <Link to={`/details/${movie.movie_id}`}>
        <Image
          alt={movie.title}
          src={API.IMAGE + movie.poster_path}
          className="object-fill h-56 w-40 hover:scale-105 ease-in-out duration-300 transform"
        />
      </Link>
      {/* <CardFooter className="inline-block w-[80%] h-auto border-white/10 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 shadow-small left-[10%] z-10">
        <Link to={`/details/${movie.movie_id}`}>
          <p className="text-tiny text-white text-center block w-full">
            {movie.title}
          </p>
        </Link>
      </CardFooter> */}
    </Card>
  );
}

export default MovieCard;
