import { NextUIProvider } from "@nextui-org/react";
import "./App.scss";

import Header from "./components/layout/header/Header";
import Main from "./components/layout/Main";
import CartProvider from "./components/context/CartProvider";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <NextUIProvider navigate={navigate}>
      <CartProvider>
        <Header />
        <Main />
      </CartProvider>
    </NextUIProvider>
  );
}

export default App;
