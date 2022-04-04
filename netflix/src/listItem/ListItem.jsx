import "./listItem.scss";
import {
  Add,
  PlayArrow,
  ThumbDownOutlined,
  ThumbsUpDownOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export const ListItem = ({ index, item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});
  // console.log("index", item);

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get(
          "https://netflix-k.herokuapp.com/api/movies/find/" + item,
          {
            headers: {
              token:
                "Bearer " +
                JSON.parse(localStorage.getItem("user")).accessToken,
            },
          }
        );
        //console.log(res.data);
        res.data ? setMovie(res.data) : "";
      } catch (err) {
        console.log("listItam failed", err);
      }
    };
    getMovie();
  }, [item, index]);

  return (
    <Link
      to={{
        pathname: "/watch",
        search: "?sort=name",
        hash: movie.trailer,
        state: { fromDashboard: true },
      }}
    >
      <div
        className="listItem"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={movie?.imgTitle} alt="" />
        {isHovered && (
          <>
            <video src={movie.trailer} autoPlay={true} loop />
            <div className="itemInfo">
              <div className="icons">
                <PlayArrow className="icon" />
                <Add className="icon" />
                <ThumbUpAltOutlined className="icon" />
                <ThumbDownOutlined className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>{movie.duration}</span>
                <span className="limit">+{movie.limit}</span>
                <span>{movie.year}</span>
              </div>
              <div className="desc">{movie.description}</div>
              <div className="genre">{movie.genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
};
