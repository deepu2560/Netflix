import { useRef, useState } from "react";
import "./register.scss";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const handleFinish = () => {
    setPassword(passwordRef.current.value);
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
          <button className="loginButton">Sign In</button>
        </div>
      </div>

      <div className="container">
        <h1>Unlimited Movies , TV shows and more</h1>
        <h2>Watch anywhere . cancel anytime</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership
        </p>

        <p>
          {!email ? (
            <div className="input">
              <input type="email" placeholder="email address" ref={emailRef} />
              <button className="registerButton" onClick={handleStart}>
                Get Started
              </button>
            </div>
          ) : (
            <div className="input">
              <input type="password" placeholder="password" ref={passwordRef} />
              <button className="registerButton" onClick={handleFinish}>
                Start
              </button>
            </div>
          )}
        </p>
      </div>
    </div>
  );
};
