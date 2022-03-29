import "./listItem.scss";
import {
  Add,
  PlayArrow,
  ThumbDownOutlined,
  ThumbsUpDownOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import { useState } from "react";
export const ListItem = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const trailer =
    "https://player.vimeo.com/external/243924757.hd.mp4?s=1fc7fe8bd116cdd9c9c3e639ddbae75f2f4f8f2e&profile_id=174";
  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <img
        src="https://i.pinimg.com/736x/5b/8c/b3/5b8cb3a3130bce0f718020146bc23d7d.jpg"
        alt=""
      />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop />

          <div className="iteminfo">
            <div className="icons">
              <PlayArrow classNmae="icon" />
              <Add classNmae="icon" />
              <ThumbUpAltOutlined classNmae="icon" />
              <ThumbDownOutlined classNmae="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins </span>
              <span className="limit"> +16 </span>
              <span>1999</span>
              <div className="desc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptatum ratione ex porro, vitae soluta esse neque fugiat
              </div>
              <div className="genre">Action</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
