import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Movie from "./pages/Movie";

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Movie />} />
        <Route path="/*" element={<p>404</p>} />
      </Routes>
    </main>
  );
}

export default Main;
