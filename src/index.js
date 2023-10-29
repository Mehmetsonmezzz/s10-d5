import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import myReducers from "./reducers";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { composeWithDevTools } from "@redux-devtools/extension";

const root = ReactDOM.createRoot(document.getElementById("root"));
const middleware = applyMiddleware(thunk, logger);
const store = createStore(myReducers, composeWithDevTools(middleware));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <>
        <App />
        <ToastContainer />
      </>
    </BrowserRouter>
  </Provider>
);
