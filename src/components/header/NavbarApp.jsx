import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import Cartwidget from "../ui/Cartwidget";

function NavbarApp() {
  return (
    <Navbar className="navbar-app bg-black/50 text-white" shouldHideOnScroll>
      <NavbarBrand>
        <Link to="/">
          <h1 className="heading-brand text-2xl font-thin cursor-pointer text-white">
            <span className="heading-span font-black text-2xl">Twist</span>Plot
          </h1>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link to="/movie" className="text-white" href="#">
            Comedia
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" href="#">
            Acción
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" href="#">
            Drama
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Cartwidget />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

export default NavbarApp;
