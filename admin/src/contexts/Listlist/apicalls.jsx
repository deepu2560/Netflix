import axios from "axios";
import { updateMovieSuccess } from "../movies/movieAction";
import {
  createListFailure,
  createListStart,
  createListSuccess,
  deleteListFailure,
  deleteListStart,
  deleteListSuccess,
  getListsFailure,
  getListsStart,
  getListsSuccess,
  updateListFailure,
  updateListStart,
} from "./listAction";

export const getLists = async (dispatch) => {
  dispatch(getListsStart());
  try {
    const res = await axios.get("http://localhost:8080/movies");
    dispatch(getListsSuccess(res.data));
  } catch (err) {
    dispatch(getListsFailure());
  }
};

//create
export const updatemovie = async (id, list, dispatch) => {
  dispatch(updateListStart());
  try {
    const res = await axios.put("http://localhost:8080/movies" + id, list);
    dispatch(updateMovieSuccess(res.data));
  } catch (err) {
    dispatch(updateListFailure());
  }
};

//delete
export const deleteList = async (id, dispatch) => {
  dispatch(deleteListStart());
  try {
    await axios.delete("http://localhost:8080/movies" + id);
    dispatch(deleteListSuccess(id));
  } catch (err) {
    dispatch(deleteListFailure());
  }
};
