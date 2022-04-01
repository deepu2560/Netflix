import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import { useRef, useState } from "react";
import { ListItem } from "../../listItem/ListItem";
import "./list.scss";

export const List = () => {
  const [isMoved, setIsMoved] = useState(false);
  const [sliderNumber, setSliderNumber] = useState(0);
  const [clickLimit, setClickLimit] = useState(window.innerWidth / 230);
  const listRef = useRef();
  const handleClick = (dir) => {
    setIsMoved(true);
    let dist = listRef.current.getBoundingClientRect().x - 50;
    if (dir === "left" && sliderNumber > 0) {
      setSliderNumber(sliderNumber - 1);
      listRef.current.style.transform = `translateX(${230 + dist}px`;
    }
    if (dir === "right" && sliderNumber < 10 - clickLimit) {
      setSliderNumber(sliderNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + dist}px`;
    }
  };
  return (
    <div className="list">
      <span className="listTitle">Continue to Watch</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() => {
            handleClick("left");
          }}
          style={{ display: !isMoved && "none" }}
        />
        <div className="container" ref={listRef}>
          <ListItem index={0} />
          <ListItem index={1} />
          <ListItem index={2} />
          <ListItem index={3} />
          <ListItem index={4} />
          <ListItem index={5} />
          <ListItem index={6} />
          <ListItem index={7} />
          <ListItem index={8} />
          <ListItem index={9} />
          <ListItem index={10} />
          <ListItem index={11} />
          <ListItem index={12} />
          <ListItem index={13} />
          <ListItem index={14} />
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
