import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./GlobalStyles/GlobalStyle";
import store from "./Redux/Store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle>
        <Provider store={store}>
          <App />
        </Provider>
      </GlobalStyle>
    </BrowserRouter>
  </React.StrictMode>
);
