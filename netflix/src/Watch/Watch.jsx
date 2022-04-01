import { ArrowBackOutlined } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./watch.scss";

export default function Watch() {
  const location = useLocation();
  console.log(location);
  useEffect(() => {}, []);
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
        src="https://firebasestorage.googleapis.com/v0/b/netflix-clone-e78b1.appspot.com/o/items%2F1648800492764videomanofsteel.mp4?alt=media&token=f8bd1966-def4-4bcf-b6e3-629d6c788a51"
      />
    </div>
  );
}
