import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./AuthActions";

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(
      "https://user-netflix.herokuapp.com/user/login",
      user
    );
    dispatch(loginSuccess(res.data));
  } catch (err) {
    console.log("erroe", err);
    dispatch(loginFailure());
  }
};
