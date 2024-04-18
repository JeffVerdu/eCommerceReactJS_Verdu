import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Movie from "./Movie";

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:category" element={<Home />} />
        <Route path="/details/:id" element={<Movie />} />
        <Route path="/*" element={<p>404</p>} />
      </Routes>
    </main>
  );
}

export default Main;
