import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { MovieContextProvider } from "./contexts/movies/movieContext";
import { ListContextProvider } from "./contexts/listContext/ListContext";
ReactDOM.render(
  <React.StrictMode>
    <MovieContextProvider>
      <ListContextProvider>
        <App />
      </ListContextProvider>
    </MovieContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
