export const getMovieStart = () => {
  type: "GET_MOVIES_START";
};

export const getMovieSuccess = (movies) => {
  type: "GET_MOVIES_SUCCESS";
  payload: movies;
};

export const getMovieFailure = () => {
  type: "GET_MOVIES_FAILURE";
};
