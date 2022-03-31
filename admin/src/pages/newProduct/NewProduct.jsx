import "./newProduct.css";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { useState } from "react";

export default function NewProduct() {
  const houseData = {
    id: uuidv4,
    title: "",
    description: "",
    duration: "",
    genre: "",
    limit: "",
    isseries: "",
  };

  const [addhouse, setaddhouse] = useState(houseData);

  const addData = (event) => {
    let { name, value } = event.target;

    setaddhouse((prev) => ({ ...prev, [name]: value }));
  };

  function handlepost() {
    console.log(addhouse);
  }

  const { title, description, duration, genre, limit, isseries } = addhouse;

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Movie</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="img" onChange={(e) => console.log(e)} />
        </div>
        <div className="addProductItem">
          <label>Title image</label>
          <input type="file" id="img-title" onChange={(e) => console.log(e)} />
        </div>
        <div className="addProductItem">
          <label>Thumbnail image</label>
          <input type="file" id="imgae-Sm" onChange={(e) => console.log(e)} />
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input
            type="text"
            defaultValue={title}
            name="title"
            placeholder="The Kasmir Files"
            onChange={(e) => addData(e)}
          />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input
            type="text"
            defaultValue={description}
            name="description"
            placeholder="description"
            onChange={(e) => addData(e)}
          />
        </div>
        <div className="addProductItem">
          <label>Genre</label>
          <input
            type="text"
            defaultValue={genre}
            name="genre"
            placeholder="genre"
            onChange={(e) => addData(e)}
          />
        </div>
        <div className="addProductItem">
          <label>Duration</label>
          <input
            type="text"
            defaultValue={duration}
            name="duration"
            placeholder="duration"
            onChange={(e) => addData(e)}
          />
        </div>
        <div className="addProductItem">
          <label>Limit</label>
          <input
            type="text"
            defaultValue={limit}
            name="limit"
            placeholder="Age limit"
            onChange={(e) => addData(e)}
          />
        </div>
        <div className="addProductItem">
          <label>Trailer</label>
          <input type="file" onChange={(e) => console.log(e)} />
        </div>
        <div className="addProductItem">
          <label>Video</label>
          <input type="file" onChange={(e) => console.log(e)} />
        </div>
        <div className="addProductItem">
          <label>Is Series ?</label>
          <select
            name="isseries"
            defaultValue={isseries}
            id="isseries"
            onChange={(e) => addData(e)}
          >
            <option value="false">false</option>
            <option value="true">true</option>
          </select>
        </div>
      </form>
      <button className="addProductButton" onClick={() => handlepost()}>
        Create
      </button>
    </div>
  );
}
