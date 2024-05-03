import React, { createContext, useState } from "react";

export const context = createContext();
const Provider = context.Provider;

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [quantityCart, setQuantityCart] = useState(0);
  const [totalCart, setTotalCart] = useState(0);

  const addToCart = (product) => {
    let cartCopy = [...cart];
    cartCopy.push(product);
    setCart(cartCopy);
    setQuantityCart(quantityCart + 1);
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
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };
  const decreaseQuantity = (id) => {
    const newCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCart(newCart);
  };
  const clearCart = () => {
    setCart([]);
  };
  const isInCart = (id) => {
    return cart.some((item) => item.movie_id === id);
  };

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
