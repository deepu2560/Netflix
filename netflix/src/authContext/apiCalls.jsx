import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./AuthActions";

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(
      //"https://netflix-k.herokuapp.com/user/login",
      "https://netflix-k.herokuapp.com/user/login",
      user
    );
    console.log(res);
    if (res.data.status) {
      return alert("enter correct details");
    } else {
    }
    localStorage.setItem("user", JSON.stringify(res.data));
    dispatch(loginSuccess(res.data));
  } catch (err) {
    console.log("erroe", err);
    alert("Enter Correct Credentials");
    dispatch(loginFailure());
  }
};
