import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import App from "./App";
import "./index.css";
import NavCategoryProvider from "./share/context/nav-category-context";
import store from "./store/store";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <Provider store = {store}>
     <BrowserRouter >
        <NavCategoryProvider>
          <App />
        </NavCategoryProvider>
     </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
