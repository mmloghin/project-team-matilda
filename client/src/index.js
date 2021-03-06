import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import { StateProvider } from "./components/StateProvider";
import reducer, { initialState } from "./components/reducer";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <StateProvider initialState={initialState} reducer={reducer}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StateProvider>
);
