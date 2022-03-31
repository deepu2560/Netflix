import "./home.scss";
import { AcUnit } from "@material-ui/icons";
import Navbar from "../Components/Navbar/Navbar";
import Featured from "../Components/featured/Featured";
import { List } from "../Components/list/List";
import { useEffect, useState } from "react";
import axios from "axios";
const Home = ({ type }) => {
  console.log(type);
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const get_list = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/api/lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDVkY2QyODBhYWIwMDgyOTM0NjJmMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODc0NTczNywiZXhwIjoxNjQ5MTc3NzM3fQ._mdvS_JCjzzQpOhyl_Jud2JLTxTgtaCN4X8PoZwG-4Q",
            },
          }
        );
        //console.log(res);
        setLists(res.data);
      } catch (err) {
        console.log("backend", err);
      }
    };

    get_list();
  }, []);
  return (
    <div className="home">
      <Navbar />

      <Featured type={type} />
      {lists.map((list) => (
        <List list={list} />
      ))}
    </div>
  );
};

export default Home;
