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
  // const [item, setMovie] = useState({});
  // console.log("index", item);

  // useEffect(() => {
  //   const getMovie = async () => {
  //     try {
  //       const res = await axios.get(
  //         "https://netflix-k.herokuapp.com/api/movies/find/" + item,
  //         {
  //           headers: {
  //             token:
  //               "Bearer " +
  //               JSON.parse(localStorage.getItem("user")).accessToken,
  //           },
  //         }
  //       );
  //       //console.log(res.data);
  //       res.data ? setMovie(res.data) : "";
  //     } catch (err) {
  //       console.log("listItam failed", err);
  //     }
  //   };
  //   getMovie();
  // }, [item, index]);

  return (
    <Link
      to={{
        pathname: "/watch",
        search: "?sort=name",
        hash: item.trailer,
        state: { fromDashboard: true },
      }}
    >
      <div
        className="listItem"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={item?.imgTitle} alt="photo" loading="lazy" />
        {isHovered && (
          <>
            <video src={item.trailer} autoPlay={true} muted />
            <div className="itemInfo">
              <div className="icons">
                <PlayArrow className="icon" />
                <Add className="icon" />
                <ThumbUpAltOutlined className="icon" />
                <ThumbDownOutlined className="icon" />
              </div>
              <div
                className="itemInfoTop"
                style={{ padding: "5px", margin: "0px" }}
              >
                <span>{item.duration}</span>
                <span>{item.title}</span> <br />
                <span>{item.year}</span>{" "}
                <span className="genre">{"  " + item.genre}</span>
              </div>
              <div
                className="desc"
                style={{ padding: "5px", margin: "0px", fontSize: "smaller" }}
              >
                {item.description}
              </div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
};
