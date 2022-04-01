import axios from "axios";
import {
  createMovieFailure,
  createMovieStart,
  createMovieSuccess,
  deleteMovieFailure,
  deleteMovieStart,
  deleteMovieSuccess,
  getMoviesFailure,
  getMoviesStart,
  getMoviesSuccess,
} from "./movieAction";

export const getMovies = async (dispatch) => {
  dispatch(getMoviesStart());
  try {
    const res = await axios.get("http://localhost:8080/api/movies", {
      headers: {
        token:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDU0OWNiNmFhYjRkOWM4NjdhMjYxNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODc5NDcyOCwiZXhwIjoxNjQ5MjI2NzI4fQ.kAEKxFQRI7xrhV4PkwfgaRLVkRcbTdLnQdYUfg_z9bo",
      },
    });

    dispatch(getMoviesSuccess(res.data));
  } catch (err) {
    dispatch(getMoviesFailure());
  }
};

//create
export const createMovie = async (movie, dispatch) => {
  dispatch(createMovieStart());
  try {
    const res = await axios.post("http://localhost:8080/api/movies", movie, {
      headers: {
        token:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDU0OWNiNmFhYjRkOWM4NjdhMjYxNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODc5NDcyOCwiZXhwIjoxNjQ5MjI2NzI4fQ.kAEKxFQRI7xrhV4PkwfgaRLVkRcbTdLnQdYUfg_z9bo",
      },
    });
    console.log(res)

    // const res = await axios.post("http://localhost:8080/api/movies",movie);
    dispatch(createMovieSuccess(res.data));
  } catch (err) {
    dispatch(createMovieFailure());
  }
};

//delete
export const deleteMovie = async (id, dispatch) => {
  dispatch(deleteMovieStart());
  try {
    await axios.delete("http://localhost:8080/api/movies" + id, {
      headers: {
        token:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDU0OWNiNmFhYjRkOWM4NjdhMjYxNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODc5NDcyOCwiZXhwIjoxNjQ5MjI2NzI4fQ.kAEKxFQRI7xrhV4PkwfgaRLVkRcbTdLnQdYUfg_z9bo",
      },
    });
    dispatch(deleteMovieSuccess(id));
  } catch (err) {
    dispatch(deleteMovieFailure());
  }
};
