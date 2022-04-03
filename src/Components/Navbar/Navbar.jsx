import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import axios from "axios";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { logout } from "../../authContext/AuthActions";
import { AuthContext } from "../../authContext/AuthContext";
import "./navbar.scss";

const Navbar = () => {
  const [searchbox, setSearchbox] = useState(false);
  const [searchresultbox, setSearchresultbox] = useState(false);
  const { dispatch } = useContext(AuthContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [result, setResult] = useState([]);

  const debounce = (cb, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        cb(...args);
      }, delay);
    };
  };
  const searchMovie = () => {
    setSearchbox(!searchbox);
    setSearchresultbox(false);
    console.log("search");
  };
  const updateDebounce = debounce((e) => {
    setSearchresultbox(true);
    axios
      .get(`https://netflix-n.herokuapp.com/api/movies/search?s=${e}`, {
        headers: {
          token:
            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      })
      .then(({ data }) => {
        console.log(data);
        setResult(data.result);
      });
  }, 1000);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1200px-Logonetflix.png"
        alt="logo"
        className="small_logo"
      />
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1200px-Logonetflix.png"
            alt="logo"
          />

          <Link to="/" className="link">
            <span>HomePage</span>
          </Link>
          <Link to="/movies" className="link ">
            <span className="mainLink">Movies</span>
          </Link>
          <Link to="/series" className="link ">
            <span className="mainLink">Series</span>
          </Link>

          <span>New and Popular </span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search
            className="icon"
            onClick={() => {
              searchMovie();
            }}
          />
          <div className="searchdiv">
            {searchbox ? (
              <input
                type="search"
                className="search_input"
                onChange={(e) => {
                  updateDebounce(e.target.value);
                }}
              />
            ) : (
              ""
            )}
            {searchresultbox ? (
              <div className="searchBox">
                {result.length !== 0 ? (
                  <>
                    <div>
                      {result.map((e) => (
                        <>
                          {" "}
                          <div style={{ display: "flex" }}>
                            {" "}
                            <div style={{ textAlign: "center" }}>
                              <Link
                                to={{
                                  pathname: "/watch",
                                  search: "?sort=name",
                                  hash: e.trailer,
                                  state: { fromDashboard: true },
                                }}
                                style={{ textDecoration: "none" }}
                              >
                                <img
                                  src={e.img}
                                  alt="image"
                                  style={{
                                    width: "100%",
                                    height: "80px",
                                    objectFit: "cover",
                                  }}
                                />
                                <p>{e.title}</p>
                                <p>{e.year}</p>
                              </Link>
                            </div>
                          </div>
                        </>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    <p>No results</p>
                  </>
                )}
              </div>
            ) : (
              ""
            )}
          </div>
          <span>Kid</span>
          <Notifications className="icon" />
          <img
            src="https://raisingchildren.net.au/__data/assets/image/0024/47742/baby-behaviour-and-awareness.jpg"
            alt=""
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              {" "}
              <span>Settings</span>
              <span onClick={() => dispatch(logout())}>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
