import "./app.scss";
import { Login } from "./Components/login/Login";
import { Register } from "./Components/register/Register";
import { Route, Navigate, Routes } from "react-router-dom";
import { useContext } from "react";
import Home from "./HomePage/Home";
import Watch from "./Watch/Watch";
import { AuthContext } from "./authContext/AuthContext";
import NotFound from "./404/NotFound";

function App() {
  let { user } = useContext(AuthContext);
  return (
    <Routes>
      <Route path="/" exact element={user ? <Home /> : <Register />}></Route>
      <Route
        path="/register"
        exact
        element={!user ? <Register /> : <Home />}
      ></Route>
      <Route path="/login" exact element={!user ? <Login /> : <Home />}></Route>

      <Route
        path="/movies"
        exact
        element={user ? <Home type="movie" /> : <Register />}
      ></Route>
      <Route
        path="/series"
        exact
        element={user ? <Home type="series" /> : <Register />}
      ></Route>
      <Route path="/watch" exact element={<Watch />}></Route>

      <Route path="*" exact element={<NotFound />} />
    </Routes>
  );
}

export default App;
