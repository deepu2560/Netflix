import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./featured.scss";

const Featured = ({ type }) => {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-Fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="documentry">Documentry</option>
          </select>
        </div>
      )}
      <img
        src="https://wallpapercave.com/wp/pJhlkBc.jpg"
        width={"100%"}
        alt="movie"
      />
      <div className="info">
        <img
          src="https://seeklogo.com/images/B/batman-logo-67F6E4934C-seeklogo.com.png"
          alt=""
        />
        <span className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolor
          sequi delectus perferendis blanditiis atque non vitae cumque
          consequatur recusandae quis incidunt, quod ipsum in aspernatur,
          officia ullam quidem consequuntur!
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
