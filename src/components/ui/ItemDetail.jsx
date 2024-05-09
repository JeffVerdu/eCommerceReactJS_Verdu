import { ShoppingCart } from "lucide-react";
import IMAGES_API from "../../config/Api";
import React, { useContext, useState } from "react";
import { context } from "../context/CartProvider";
import { ItemQuantitySelector } from "./ItemQuantitySelector";
import Swal from "sweetalert2";

function ItemDetail({ movie }) {
  const contextValue = useContext(context);
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (quantity) => {
    setQuantity(quantity);
  };

  const handleAddToCart = () => {
    contextValue.addToCart(movie, quantity);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Agregaste una película",
      showConfirmButton: false,
      timer: 1500,
      background: "rgb(0 0 0 / 0.9)",
      color: "#ffffff",
      width: "30rem",
      animation: true,
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `,
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `,
      },
    });
  };

  return (
    <section className="details pb-20">
      <div
        className="details-container"
        style={{
          backgroundImage: `url(${IMAGES_API.IMAGE_BACKGROUND}${movie.backdrop_path})`,
        }}
      ></div>
      <div className="details-grid grid grid-rows-2 md:grid-cols-2 md:grid-rows-none container-box justify-center items-center">
        <img
          src={`${IMAGES_API.IMAGE}${movie.poster_path}`}
          alt={`${movie.title}`}
          className="rounded-3xl shadow-black shadow-2xl inline-block w-auto h-[28rem] object-contain my-0 mx-auto"
        />
        <div className="movie-inf text-white">
          <h2 className="text-2xl font-black">{movie.title}</h2>
          <p className="mb-4 text-xs">
            Fecha de lanzamiento: {movie.release_date}
          </p>
          <p className="leading-8 text-sm">{movie.overview}</p>
          <div className="flex items-center justify-between mt-10">
            <p className="m-0 font-bold">Precio: ${movie.price} </p>
            <ItemQuantitySelector onQuantityChange={handleQuantityChange} />
            <button
              onClick={handleAddToCart}
              className={`flex gap-x-1 rounded-lg font-medium button hover:brightness-125`}
            >
              Agregar al carrito
              <ShoppingCart />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ItemDetail;
