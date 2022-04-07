import { SortByAlphaRounded } from "@material-ui/icons";
import axios from "axios";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.scss";
import pic from "./tv-new.png";
import icon from "./download-icon.gif";
import joker2 from "./joker-poster-2.jpg";
import mobile from "./mobile.png";
import devices from "./devices-new.png";
import video_joker from "./joker-intro.mp4";

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
      .post("https://netflix-k.herokuapp.com/user/register", {
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
    <>
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
            Ready to watch? Enter your email to create or restart your
            membership
          </p>

          <span>
            {!nextstep ? (
              <>
                <div className="input1">
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
                <p style={{ position: "absolute", zIndex: "65" }}>{erruser}</p>
              </>
            )}
          </span>
        </div>

        {/* section-1*/}
      </div>
      <div className="section section1">
        <div className="container">
          <div className="section__text">
            <h1 className="section__text--title">Enjoy on your TV.</h1>
            <h2 className="section__text--subtitle">
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </h2>
          </div>
          <div className="section__content">
            <div className="section-animation-container">
              <img className="section-animation-image" src={pic} alt="image" />
            </div>
          </div>
        </div>
      </div>
      {/* {section-2} */}
      <div className="section section2">
        <div className="container">
          <div className="section__text">
            <h1 className="section__text--title">
              Download your shows to watch offline.
            </h1>
            <h2 className="section__text--subtitle">
              Save your favourites easily and always have something to watch.
            </h2>
          </div>
          <div className="section__content">
            <div className="section-animation-container">
              <img className="section-animation-image" src={mobile} alt="" />
              <div className="section-animation section-animation-2">
                <div className="animation-box">
                  <img className="animation-poster" src={joker2} alt="" />
                  <div className="animation-text">
                    <p className="text0">Joker</p>
                    <p className="text1">Downloading...</p>
                  </div>
                  <img className="download-gif" src={icon} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section --3*/}
      <div className="section section3">
        <div className="container">
          <div className="section__text">
            <h1 className="section__text--title">Watch everywhere.</h1>
            <h2 className="section__text--subtitle">
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </h2>
          </div>
          <div className="section__content">
            <div className="section-animation-container">
              <img className="section-animation-image" src={devices} alt="" />
              <video
                className="section-animation-3"
                autoPlay
                playsInline
                muted
                loop
              >
                <source src={video_joker} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>

      {/* footer -----------------------------------------*/}
      <footer className="footer">
        <div className="container">
          <div className="footer__text">
            <p>Questions? Call 000-800-000-0007</p>
          </div>
          <ul className="footer-container">
            <li className="footer-link-item">
              <a className="footer-link" href="">
                FAQ
              </a>
            </li>
            <li className="footer-link-item">
              <a className="footer-link" href="">
                Account
              </a>
            </li>
            <li className="footer-link-item">
              <a className="footer-link" href="">
                Investor Relations
              </a>
            </li>
            <li className="footer-link-item">
              <a className="footer-link" href="">
                Ways to Watch
              </a>
            </li>
            <li className="footer-link-item">
              <a className="footer-link" href="">
                Privacy
              </a>
            </li>
            <li className="footer-link-item">
              <a className="footer-link" href="">
                Corporate Information
              </a>
            </li>
            <li className="footer-link-item">
              <a className="footer-link" href="">
                Speed Test
              </a>
            </li>
            <li className="footer-link-item">
              <a className="footer-link" href="">
                Tenflix Originals
              </a>
            </li>
            <li className="footer-link-item">
              <a className="footer-link" href="">
                Help Center
              </a>
            </li>
            <li className="footer-link-item">
              <a className="footer-link" href="">
                Media Center
              </a>
            </li>
            <li className="footer-link-item">
              <a className="footer-link" href="">
                Jobs
              </a>
            </li>
            <li className="footer-link-item">
              <a className="footer-link" href="">
                Terms of Use
              </a>
            </li>
            <li className="footer-link-item">
              <a className="footer-link" href="">
                Cookie Preferences
              </a>
            </li>
            <li className="footer-link-item">
              <a className="footer-link" href="">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};
