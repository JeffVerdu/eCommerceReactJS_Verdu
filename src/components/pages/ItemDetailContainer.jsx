import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

import ItemDetail from "../ui/ItemDetail.jsx";
import { getItemDetail } from "../../utils/services.js";

function ItemDetailContainer() {
  const params = useParams();
  const idMovie = params.id;
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    getItemDetail(idMovie).then((movie) => {
      setMovieDetails(movie);
    });
  }, [idMovie]);

  return (
    <>
      <ItemDetail movie={movieDetails} />
    </>
  );
}

export default ItemDetailContainer;
