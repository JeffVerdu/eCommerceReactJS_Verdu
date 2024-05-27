import React, { useContext, useEffect, useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { getCategories } from "../../utils/services";
import { Menu } from "lucide-react";
import { context } from "../context/CartProvider";

export default function DropdownButton() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((categories) => {
      setCategories(categories);
    });
  }, []);
  return (
    <Dropdown backdrop="blur" className="bg-black/50">
      <DropdownTrigger>
        <Button color="default" variant="light">
          {/* <p
            className={`w-5 md:w-full text-tiny text-center rounded-full cart-number md:hidden ${
              contextValue.quantityCart > 0
                ? "opacity-100 transition-opacity duration-500"
                : "opacity-0"
            }`}
          >
            {contextValue.quantityCart > 0 ? contextValue.quantityCart : ""}
          </p> */}
          <p className="hidden md:block text-white text-lg font-light">
            Categorías
          </p>
          <Menu className="md:hidden" color="#ffffff" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Categorías"
        color="default"
        variant="flat"
        className="text-white"
      >
        {categories.map((category, index) => (
          <DropdownItem
            key={index}
            textValue={category.name}
            href={`/category/${category.key}`}
          >
            {category.name}
          </DropdownItem>
        ))}
        {/* <DropdownItem
          textValue="Carrito de compras"
          href="/cart"
          className="md:hidden"
        >
          <Cartwidget />
        </DropdownItem> */}
      </DropdownMenu>
    </Dropdown>
  );
}
