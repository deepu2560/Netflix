import "./home.scss";
import { AcUnit } from "@material-ui/icons";
import Navbar from "../Components/Navbar/Navbar";
import Featured from "../Components/featured/Featured";
import { List } from "../Components/list/List";
import { useEffect, useState } from "react";
import axios from "axios";
const Home = ({ type }) => {
  //console.log(type);
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const get_list = async () => {
      try {
        const res = await axios.get(
          `https://netflix-k.herokuapp.com/api/lists${
            type ? "?type=" + type : ""
          }${genre ? "&genre=" + genre : ""}`,
          {
            headers: {
              token:
                "Bearer " +
                JSON.parse(localStorage.getItem("user")).accessToken,
            },
          }
        );
        console.log(res.data);
        setLists(res.data);
      } catch (err) {
        //console.log("backend", err);
      }
    };

    get_list();
  }, []);
  return (
    <div className="home">
      <Navbar />

      <Featured type={type} setGenre={setGenre} />
      {lists.map((list) => {
        //console.log("appedning");
        return <List list={list} />;
      })}
    </div>
  );
};

export default Home;
