import React from "react";
import './app.scss';
import Header from "./components/UI/header/header";
import { BrowserRouter } from "react-router-dom";
import Realty from "./components/realties/realties";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Realty />
      </BrowserRouter>
    </div>
  );
}

export default App;
