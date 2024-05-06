import React, { createContext, useState } from "react";

export const context = createContext();
const Provider = context.Provider;

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [quantityCart, setQuantityCart] = useState(0);
  const [totalCart, setTotalCart] = useState(0);

  //Función para agregar una película al carrito de compras
  const addToCart = (movie) => {
    let cartCopy = [...cart];
    cartCopy.push(movie);
    setCart(cartCopy);
    setQuantityCart(quantityCart + 1);
    let total = totalCart > 0 ? totalCart + movie.price : movie.price;
    total.toFixed(2);
    setTotalCart(total);

    // else {
    //   const newCart = cart.map((item) => {
    //     if (item.id === product.id) {
    //       return { ...item, quantity: item.quantity + 1 };
    //     }
    //     return item;
    //   });
    //   setCart(newCart);
    // }
  };

  //Función para remover una película del carrito de compras
  const removeFromCart = (id) => {
    const movie = cart.find((item) => item.movie_id === id);
    const newCart = cart.filter((item) => item.movie_id !== id);
    setCart(newCart);
    setQuantityCart(quantityCart - 1);
    let total = totalCart - movie.price > 0 ? totalCart - movie.price : 0;
    total.toFixed(2);
    setTotalCart(total);
  };

  //Función para disminuir la cantidad de una película en el carrito de compras
  const decreaseQuantity = (id) => {
    const newCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCart(newCart);
  };

  //Función para vaciar el carrito de compras
  const clearCart = () => {
    setCart([]);
    setQuantityCart(0);
    setTotalCart(0);
  };

  //Función para verificar si una película ya está en el carrito de compras
  const isInCart = (id) => {
    return cart.some((item) => item.movie_id === id);
  };

  //Objeto con las funciones y atributos a compartir con los componentes
  const currentValue = {
    cart: cart,
    quantityCart: quantityCart,
    totalCart: totalCart,
    addToCart: addToCart,
    removeFromCart: removeFromCart,
    decreaseQuantity: decreaseQuantity,
    clearCart: clearCart,
    isInCart: isInCart,
  };

  return <Provider value={currentValue}>{children}</Provider>;
};

export default CartProvider;
