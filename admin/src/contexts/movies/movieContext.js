import MovieRducer from "./movieReducer";
import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  movies: [],
  isFatching: false,
  error: false,
};

export const MovieContext = createContext(INITIAL_STATE);

export const MovieContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(MovieRducer, INITIAL_STATE);

  return (
    <MovieContext.Provider
      value={{
        movies: state.movies,
        isFatching: state.isFatching,
        error: state.error,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
