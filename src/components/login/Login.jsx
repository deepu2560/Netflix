import "./login.scss";

export const Login = () => {
  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const handleFinish = () => {
    setPassword(passwordRef.current.value);
  };
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1200px-Logonetflix.png"
            alt=""
            className="logo"
          />
        </div>
      </div>

      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input type="email" placeholder="Email or Phone Number" />
          <input type="email" placeholder="Email or Phone Number" />
          <button className="loginButton">Sign In</button>
          <span>
            New to Netflix? <b>Sign Up Now.</b>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot <b>Learn More</b>
          </small>
        </form>
      </div>
    </div>
  );
};