import React from "react";
import NavbarApp from "./NavbarApp";
import HeroHome from "./HeroHome";

import { Route, Routes } from "react-router-dom";

function Header() {
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
