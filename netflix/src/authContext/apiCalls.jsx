import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./AuthActions";

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(
      "https://mycrosproxy-forauth.herokuapp.com/https://netflix-backend23.herokuapp.com/api/auth/login",
      user
    );
    dispatch(loginSuccess(res.data));
  } catch (err) {
    console.log("erroe", err);
    dispatch(loginFailure());
  }
};
