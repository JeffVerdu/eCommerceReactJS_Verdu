import React from "react";
import { Routes, Route } from "react-router-dom";

import ItemListContainer from "../pages/ItemListContainer";
import ItemDetailContainer from "../pages/ItemDetailContainer";
import { Cart } from "../pages/Cart";
import { Checkout } from "../pages/Checkout";

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:category" element={<ItemListContainer />} />
        <Route path="/details/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/*" element={<ItemListContainer />} />
      </Routes>
    </main>
  );
}

export default Main;
