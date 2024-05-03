import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Cartwidget from "../../ui/Cartwidget";

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
      <NavbarContent className="hidden sm:flex gap-1" justify="center">
        <NavbarItem>
          <NavLink
            to="/category/35"
            className={({ isActive }) =>
              [
                isActive
                  ? "bg-white/20 rounded-lg py-1 px-2 text-white"
                  : "text-white rounded-lg py-1 px-2 hover:bg-white/20 hover:border-white/50 hover:ease-in-out hover:duration-300",
              ].join(" ")
            }
          >
            Comedia
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink
            to="/category/28"
            className={({ isActive }) =>
              [
                isActive
                  ? "bg-white/20 rounded-lg py-1 px-2 text-white"
                  : "text-white rounded-lg py-1 px-2 hover:bg-white/20 hover:border-white/50 transform ease-in-out duration-300",
              ].join(" ")
            }
          >
            Acción
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink
            to="/category/18"
            className={({ isActive }) =>
              [
                isActive
                  ? "bg-white/20 rounded-lg py-1 px-2 text-white"
                  : "text-white rounded-lg py-1 px-2 hover:bg-white/20 hover:border-white/50 hover:ease-in-out hover:duration-300",
              ].join(" ")
            }
          >
            Drama
          </NavLink>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="hidden sm:flex">
        <NavbarItem>
          <Cartwidget />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

export default NavbarApp;
