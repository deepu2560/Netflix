import "./app.scss";
import { Login } from "./Components/login/Login";
import { Register } from "./Components/register/Register";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";

import Home from "./HomePage/Home";

function App() {
  let user = false;
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
      {user && (
        <>
          <Route path="/movies" element={<Home type="movie" />}></Route>
          <Route path="/series" element={<Home type="series" />}></Route>
          {/* <Route path="/watch">
              <Watch />
            </Route> */}
        </>
      )}
    </Routes>
  );
}

export default App;
