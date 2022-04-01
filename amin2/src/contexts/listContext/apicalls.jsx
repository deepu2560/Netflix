import axios from "axios";
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
} from "./ListAction";

export const getLists = async (dispatch) => {
  dispatch(getListsStart());
  try {
    const res = await axios.get("http://localhost:8080/api/lists", {
      headers: {
        token:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDVkY2QyODBhYWIwMDgyOTM0NjJmMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODc5NzkwMCwiZXhwIjoxNjQ5MjI5OTAwfQ.NuKWLkBfr2aYo7ay2SJRXW45rcOodPy_c9HqjSlqHK8",
      },
    });

    dispatch(getListsSuccess(res.data));
  } catch (err) {
    dispatch(getListsFailure());
  }
};

//create
export const createMovie = async (movie, dispatch) => {
  dispatch(createListStart());
  try {
    const res = await axios.post("http://localhost:8080/api/movies", movie, {
      headers: {
        token:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDVkY2QyODBhYWIwMDgyOTM0NjJmMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODc5NzkwMCwiZXhwIjoxNjQ5MjI5OTAwfQ.NuKWLkBfr2aYo7ay2SJRXW45rcOodPy_c9HqjSlqHK8",
      },
    });
    console.log(res);

    // const res = await axios.post("http://localhost:8080/api/movies",movie);
    dispatch(createListSuccess(res.data));
  } catch (err) {
    dispatch(createListFailure());
  }
};

//delete
export const deleteLists = async (id, dispatch) => {
  dispatch(deleteListStart());
  try {
    await axios.delete("http://localhost:8080/api/lists" + id, {
      headers: {
        token:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDVkY2QyODBhYWIwMDgyOTM0NjJmMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODc5NzkwMCwiZXhwIjoxNjQ5MjI5OTAwfQ.NuKWLkBfr2aYo7ay2SJRXW45rcOodPy_c9HqjSlqHK8",
      },
    });
    dispatch(deleteListSuccess(id));
  } catch (err) {
    dispatch(deleteListFailure());
  }
};
