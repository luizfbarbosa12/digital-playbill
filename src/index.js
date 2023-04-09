import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { FontStyles } from "./FontStyle/FontStyles";
import {GlobalStyles} from './GlobalStyle/GlobalStyles'
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
  <GlobalStyles/>
    <FontStyles />
    <App />
  </>
);
