import React, { createContext, useEffect, useState } from "react";

export const context = createContext();
const Provider = context.Provider;

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [quantityCart, setQuantityCart] = useState(0);
  const [totalCart, setTotalCart] = useState(0);

  useEffect(() => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      setCart(JSON.parse(cart));
      setQuantityCart(JSON.parse(cart).length);
      setTotalCart(JSON.parse(totalCart));
    }
  }, []);

  const addToCart = (movie, quantity) => {
    if (!isInCart(movie.movie_id)) {
      let cartCopy = [...cart];
      cartCopy.push({ ...movie, quantity: quantity });

      setCart(cartCopy);

      localStorage.setItem("cart", JSON.stringify(cartCopy));
    } else {
      const newCart = cart.map((item) => {
        if (item.movie_id === movie.movie_id) {
          return { ...item, quantity: item.quantity + quantity };
        }

        return item;
      });

      setCart(newCart);

      localStorage.setItem("cart", JSON.stringify(newCart));
    }

    setQuantityCart(quantityCart + 1);

    const movieTotal = movie.price * quantity;

    const total = totalCart > 0 ? totalCart + movieTotal : movieTotal;

    setTotalCart(total);

    localStorage.setItem("totalCart", JSON.stringify(total));
  };

  const removeFromCart = (id) => {
    const movie = cart.find((item) => item.movie_id === id);
    const newCart = cart.filter((item) => item.movie_id !== id);
    setCart(newCart);
    setQuantityCart(quantityCart - 1);
    let total = totalCart - movie.price > 0 ? totalCart - movie.price : 0;
    total = total.toFixed(2);
    setTotalCart(total);

    localStorage.setItem("cart", JSON.stringify(newCart));
    localStorage.setItem("totalCart", JSON.stringify(total));
  };

  const clearCart = () => {
    setCart([]);
    setQuantityCart(0);
    setTotalCart(0);

    localStorage.removeItem("cart");
    localStorage.removeItem("totalCart");
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
    clearCart: clearCart,
    isInCart: isInCart,
  };

  return <Provider value={currentValue}>{children}</Provider>;
};

export default CartProvider;
