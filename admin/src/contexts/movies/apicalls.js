import axios from "axios";
import { getMovieFailure, getMovieStart, getMovieSuccess } from "./movieAction";

const getMovies = async (dispatch) => {
  dispatch(getMovieStart());
  try {
    await axios.get("URL").then((res) => {
      dispatch(getMovieSuccess(res.data));
    });
  } catch (error) {
    dispatch(getMovieFailure());
  }
};
