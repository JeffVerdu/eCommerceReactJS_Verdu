import React from "react";
import NavbarApp from "./NavbarApp";
import HeroHome from "./HeroHome";

import { useState, useEffect } from "react";

import API from "../../config/Api";
import { Route, Routes } from "react-router-dom";

function Header() {
  // const [characters, setCharacters] = useState([]);

  // useEffect(() => {
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       accept: "application/json",
  //       Authorization: `Bearer ${API.TOKEN}`,
  //     },
  //   };

  //   fetch(`${API.URL}/top_rated?language=en-US&page=1`, options)
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((res) => {
  //       setCharacters(res.results.slice(0, 10));
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }, []);

  return (
    <header>
      <NavbarApp />
      <Routes>
        <Route path="/" element={<HeroHome />} />
      </Routes>
    </header>
  );
}

export default Header;
