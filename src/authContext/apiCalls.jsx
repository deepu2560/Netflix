import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./AuthActions";

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(
      "https://netflix-n.herokuapp.com/user/login",
      user
    );
    dispatch(loginSuccess(res.data));
  } catch (err) {
    console.log("erroe", err);
    alert("Enter Correct Credentials");
    dispatch(loginFailure());
  }
};
