import React, { useContext, useEffect, useState } from "react";
import { context } from "../context/CartProvider";
import IMAGES_API from "../../config/Api";

export const Checkout = () => {
  const contextValue = useContext(context);

  return (
    <>
      <div className="page-background min-h-dvh">
        {contextValue.cart.length !== 0 ? (
          <div className="text-white pb-10">
            <h2 className="text-center mb-5 font-bold text-xl">
              Confirmar compra
            </h2>

            {contextValue.cart.map((movie) => (
              <div className="grid grid-cols-3 items-center container-box pb-5">
                <div className="mb-4">
                  <p className="text-center mb-2">{movie.title}</p>
                  <img
                    src={IMAGES_API.IMAGE + movie.poster_path}
                    alt={movie.title}
                    className="w-auto h-40 object-fill my-0 mx-auto rounded-lg shadow-black shadow-2xl"
                  />
                </div>
                <div className="col-start-2 col-end-4 text-right">
                  <p className="mb-2">Precio: ${movie.price}</p>
                  <button
                    onClick={() => contextValue.removeFromCart(movie.movie_id)}
                    className="bg-rose-700 px-2 py-1 hover:brightness-75 transition-all rounded-lg"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))}

            <div className="container-box border-t-1 pt-3 grid grid-cols-3 items-center">
              <div className="text-center">
                <button
                  onClick={() => contextValue.clearCart()}
                  className="bg-rose-700 px-2 py-1 hover:brightness-75 transition-all rounded-lg"
                >
                  Vaciar carrito
                </button>
              </div>
              <div className="col-start-3 col-end-4 text-right">
                <div className="flex gap-2 justify-end">
                  <p className="font-bold">Total:</p>
                  <p className="mb-3">${contextValue.totalCart}</p>
                </div>
                <button className="bg-lime-700 px-2 py-1 transition-all hover:brightness-125 rounded-lg text-right">
                  Confirmar
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-5">
            <h2 className="text-center font-bold text-xl text-white">
              No hay productos en el carrito de compras
            </h2>
          </div>
        )}
      </div>
    </>
  );
};
