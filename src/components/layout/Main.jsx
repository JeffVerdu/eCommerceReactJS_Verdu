import React from "react";
import { Routes, Route } from "react-router-dom";

import ItemListContainer from "../pages/ItemListContainer";
import ItemDetailContainer from "../pages/ItemDetailContainer";

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:category" element={<ItemListContainer />} />
        <Route path="/details/:id" element={<ItemDetailContainer />} />
        <Route path="/*" element={<ItemListContainer />} />
      </Routes>
    </main>
  );
}

export default Main;
