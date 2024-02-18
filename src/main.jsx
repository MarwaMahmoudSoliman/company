import React from "react";
import ReactDOM from "react-dom/client";
import "./i18n.jsx";
import App from "./App.jsx";
import "./index.css";

import 'react-toastify/dist/ReactToastify.css'
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { CookiesProvider } from "react-cookie";
import store from "./redux/Store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CookiesProvider defaultSetOptions={{ path: "/" }}>
      <Provider store={store}>
        <App />
        <ToastContainer position="top-right" autoClose={5000} />
      </Provider>
    </CookiesProvider>
  </React.StrictMode>
);
