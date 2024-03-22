import React from "react";
import Cartwidget from "./Cartwidget";

function Navbar() {
  return (
    <nav className="m-0 p-4 flex justify-between items-center bg-indigo-950 text-white">
      <div className="font-black">PEANUTS</div>
      <div>
        <ul className="flex gap-4">
          <li>
            <a href="#">Hogar</a>
          </li>
          <li>
            <a href="#">Deportes</a>
          </li>
          <li>
            <a href="#">Tecnología</a>
          </li>
          <li>
            <a href="#">Construcción</a>
          </li>
        </ul>
      </div>
      <div>
        <Cartwidget />
      </div>
    </nav>
  );
}

export default Navbar;
