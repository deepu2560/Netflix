import React from "react";

import "./home.scss";
// import { AcUnit } from "@material-ui/icons";
import Navbar from "../components/navbar/Navbar";
import Featured from "../components/featured/Featured";
import { List } from "../components/list/List";
const Home = () => {
  return (
    <div className="home">
      <Navbar />

      <Featured type="movies" />
      <List />
      <List />
      <List />
      <List />
    </div>
  );
};

export default Home;
