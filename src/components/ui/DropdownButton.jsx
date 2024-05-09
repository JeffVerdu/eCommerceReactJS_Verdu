import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

export default function DropdownButton({ buttonName, categories }) {
  const navigate = useNavigate();
  return (
    <Dropdown backdrop="blur" className="bg-black/50">
      <DropdownTrigger>
        <Button
          color="default"
          variant="light"
          className="capitalize text-white text-lg font-light"
        >
          {buttonName}
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
            href={`/category/${category.category_id}`}
          >
            {category.name}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
