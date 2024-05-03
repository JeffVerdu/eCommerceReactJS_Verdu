import { ShoppingCart } from "lucide-react";
import IMAGES_API from "../../config/Api";
import React, { useContext, useEffect, useState } from "react";
import { context } from "../context/CartProvider";

function ItemDetail({ movie }) {
  const contextValue = useContext(context);
  const [buttonMessage, setButtonMessage] = useState("");
  const [disabledButton, setDisabledButton] = useState(false);

  useEffect(() => {
    if (contextValue.isInCart(movie.movie_id)) {
      setButtonMessage("Ya está en el carrito");
      setDisabledButton(true);
    } else {
      setButtonMessage("Agregar al carrito");
    }
  }, [contextValue, movie.movie_id]);

  return (
    <>
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
            <div className="flex items-center gap-3 mt-10">
              <p className="m-0 font-bold">Precio: ${movie.price} </p>
              <button
                onClick={() => contextValue.addToCart(movie)}
                className={`flex gap-x-1 rounded-lg font-medium button ${
                  disabledButton
                    ? "grayscale cursor-not-allowed"
                    : "hover:brightness-125"
                }`}
                disabled={disabledButton}
              >
                {buttonMessage}
                <ShoppingCart />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ItemDetail;
