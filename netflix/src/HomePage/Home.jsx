import "./home.scss";
import { AcUnit } from "@material-ui/icons";
import Navbar from "../Components/Navbar/Navbar";
import Featured from "../Components/featured/Featured";
import { List } from "../Components/list/List";
const Home = ({ type }) => {
  return (
    <div className="home">
      <Navbar />

      <Featured type={type} />
      <List />
      <List />
      <List />
      <List />
    </div>
  );
};

export default Home;
