import React, { useState } from "react";
import { Card, Image } from "@nextui-org/react";
import { Link } from "react-router-dom";
import IMAGES_API from "../../config/Api";

function MovieCard({ movie }) {
  const [drag, setDrag] = useState(false);
  const [event, setEvent] = useState(true);

  const handleMouseDown = () => {
    setDrag(true);
  };

  const handleDrag = () => {
    if (drag) {
      setEvent(false);
    }
  };

  const handleClick = (e) => {
    if (!event) {
      e.preventDefault();
    }
  };

  return (
    <Card
      className="border-none flex-shrink-0 bg-black"
      onMouseMove={handleDrag}
      onMouseDown={handleMouseDown}
    >
      <Link to={`/details/${movie.movie_id}`} onClick={handleClick}>
        <Image
          alt={movie.title}
          src={IMAGES_API.IMAGE + movie.poster_path}
          className="object-fill h-[15rem] w-[13rem] hover:scale-105 ease-in-out duration-300 transform"
        />
      </Link>
    </Card>
  );
}

export default MovieCard;
