import "./app.scss";
import { Login } from "./Components/login/Login";
import { Register } from "./Components/register/Register";
import { Route, Navigate, Routes } from "react-router-dom";
import { useContext } from "react";
import Home from "./HomePage/Home";
import Watch from "./Watch/Watch";
import { AuthContext } from "./authContext/AuthContext";

function App() {
  let { user } = useContext(AuthContext);
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={user ? <Home /> : <Navigate to="/register" />}
      ></Route>
      <Route
        path="/register"
        element={!user ? <Register /> : <Navigate to="/" />}
      ></Route>
      <Route
        path="/login"
        element={!user ? <Login /> : <Navigate to="/" />}
      ></Route>
      {
        <>
          <Route
            path="/movies"
            element={
              user ? <Home type="movies" /> : <Navigate to="/register" />
            }
          ></Route>
          <Route
            path="/series"
            element={
              user ? <Home type="series" /> : <Navigate to="/register" />
            }
          ></Route>
          <Route path="/watch" element={<Watch />}></Route>
        </>
      }
    </Routes>
  );
}

export default App;
