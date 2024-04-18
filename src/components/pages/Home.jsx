import React from "react";
import { useParams } from "react-router-dom";

import ItemListContainer from "../ItemListContainer";

function Home() {
  const params = useParams({});

  return (
    <>
      <ItemListContainer params={params} />
    </>
  );
}

export default Home;
