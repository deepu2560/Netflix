import { SortByAlphaRounded } from "@material-ui/icons";
import axios from "axios";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.scss";

export const Register = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [nextstep, setNextstep] = useState(false);

  const handleStart = () => {
    setNextstep(true);
  };
  const handleFinish = () => {
    axios
      .post("https://netflix-backend23.herokuapp.com/api/auth/register", {
        email,
        username,
        password,
      })
      .then((res) => {
        console.log(res.data);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1200px-Logonetflix.png"
            alt=""
            className="logo"
          />
          <button
            className="loginButton"
            onClick={() => {
              navigate("/login");
            }}
          >
            Sign In
          </button>
        </div>
      </div>

      <div className="container">
        <h1>Unlimited Movies , TV shows and more</h1>
        <h2>Watch anywhere . cancel anytime</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership
        </p>

        <span>
          {!nextstep ? (
            <div className="input">
              <input
                type="email"
                placeholder="email address"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <button className="registerButton" onClick={handleStart}>
                Get Started
              </button>
            </div>
          ) : (
            <div className="input">
              <input
                type="username"
                placeholder="username"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
              <input
                type="password"
                placeholder="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <button className="registerButton" onClick={handleFinish}>
                Start
              </button>
            </div>
          )}
        </span>
      </div>
    </div>
  );
};
