import { ArrowBackOutlined } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";

import "./watch.scss";

export default function Watch() {
  const location = useLocation();
  console.log(location);

  //const movie = location.movie;
  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      <video
        className="video"
        autoPlay
        progress
        controls
        src={location.hash.slice(1)}
      />
    </div>
  );
}
