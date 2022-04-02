require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());
const connect = require("./config/db");
var cors = require("cors");

app.use(cors());
const userRoute = require("./controllers/user_controller");
const movieRoute = require("./controllers/movie_controller");
const listRoute = require("./controllers/list_controller");
const user_auth = require("./controllers/auth");
app.use("/user", user_auth);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);
const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  try {
    await connect();
    console.log(`Server is running on ${PORT}`);
  } catch (err) {
    console.log(err);
  }
});
