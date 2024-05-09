import React from "react";
import { Routes, Route } from "react-router-dom";

import ItemListContainer from "../pages/ItemListContainer";
import ItemDetailContainer from "../pages/ItemDetailContainer";
import { Checkout } from "../pages/Checkout";
import { Confirmation } from "../pages/Confirmation";

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:category" element={<ItemListContainer />} />
        <Route path="/details/:id" element={<ItemDetailContainer />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/*" element={<ItemListContainer />} />
      </Routes>
    </main>
  );
}

export default Main;
