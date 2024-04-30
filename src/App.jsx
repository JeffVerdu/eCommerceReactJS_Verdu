import { BrowserRouter } from "react-router-dom";

import "./App.scss";

import Header from "./components/layout/header/Header";
import Main from "./components/layout/Main";
import CartProvider from "./components/context/CartProvider";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Header />
          <Main />
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
