import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import { useRef, useState } from "react";
import { ListItem } from "../../listItem/ListItem";
import "./list.scss";

export const List = ({ list }) => {
  console.log(list);
  const [isMoved, setIsMoved] = useState(false);
  const [sliderNumber, setSliderNumber] = useState(0);
  const listRef = useRef();
  const handleClick = (dir) => {
    setIsMoved(true);
    let dist = listRef.current.getBoundingClientRect().x - 50;
    if (dir === "left" && sliderNumber > 0) {
      setSliderNumber(sliderNumber - 1);
      listRef.current.style.transform = `translateX(${230 + dist}px`;
    }
    if (dir === "right" && sliderNumber < 10) {
      setSliderNumber(sliderNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + dist}px`;
    }
  };
  return (
    <div className="list">
      <span className="listTitle">{list.title}</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() => {
            handleClick("left");
          }}
          style={{ display: !isMoved && "none" }}
        />
        <div className="container" ref={listRef}>
          {
            (console.log(""),
            list.content.map((item, i) => <ListItem index={i} item={item} />))
          }
        </div>
        <ArrowForwardIosOutlined
          className="sliderArrow  right"
          onClick={() => {
            handleClick("right");
          }}
        />
      </div>
    </div>
  );
};
