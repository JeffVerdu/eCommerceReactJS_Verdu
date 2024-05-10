import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Cartwidget from "../../ui/Cartwidget";
import DropdownButton from "../../ui/DropdownButton";
import { getCategories } from "../../../utils/services";

function NavbarApp() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((categories) => {
      setCategories(categories);
    });
  }, []);

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
          <DropdownButton buttonName={"Categorías"} categories={categories} />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="hidden sm:flex">
        <NavbarItem>
          <NavLink to="/cart">
            <Cartwidget />
          </NavLink>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

export default NavbarApp;
