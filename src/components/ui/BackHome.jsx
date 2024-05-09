import React from "react";
import { useNavigate } from "react-router-dom";

export const BackHome = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <button
      onClick={handleClick}
      className="rounded-lg font-medium button mt-5 hover:brightness-125"
    >
      Volver al inicio
    </button>
  );
};
