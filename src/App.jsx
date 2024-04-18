import { BrowserRouter } from "react-router-dom";

import "./App.scss";

import Header from "./components/header/Header";
import Main from "./components/pages/Main";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
    </>
  );
}

export default App;
