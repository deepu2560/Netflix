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
  const [errmail, setErrmail] = useState(null);
  const [erruser, setErruser] = useState(null);
  const [nextstep, setNextstep] = useState(false);

  const handleStart = () => {
    if (email === "") {
      setErrmail("Enter Valid Email");
      return;
    }
    if (!email.includes("@")) {
      setErrmail("Enter Valid Email");
      return;
    }
    if (!email.includes(".com")) {
      setErrmail("Enter Valid Email");
      return;
    }
    setErrmail(null);
    setNextstep(true);
  };
  const handleFinish = () => {
    if (username === "" || password === "") {
      setErruser("Enter Valid Credentials");
      return;
    }
    if (password.length < 5) {
      setErrmail("");
      return;
    }

    axios
      .post("https://netflix-n.herokuapp.com/user/register", {
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
            <>
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
              <p>{errmail}</p>
            </>
          ) : (
            <>
              <div className="input">
                <input
                  value={username}
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
              <p>{erruser}</p>
            </>
          )}
        </span>
      </div>
    </div>
  );
};
