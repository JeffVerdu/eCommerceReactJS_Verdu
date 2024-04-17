import React from "react";
import { useParams } from "react-router-dom";

import ItemDetailContainer from "../ItemDetailContainer";

function Movie() {
  const { id } = useParams();

  console.log(id);

  return <ItemDetailContainer idMovie={id} />;
}

export default Movie;
