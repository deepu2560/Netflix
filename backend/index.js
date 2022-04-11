const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
const connect = require("./configs/db");
const dotenv = require("dotenv");
const authRout = require("./controllers/auth");
const userRoute = require("./controllers/user_controller");
const movieRoute = require("./controllers/movie_controller");
const listRoute = require("./controllers/list_controller");

// const corsOptions ={
//   origin:'*', 
//   credentials:true,            //access-control-allow-credentials:true
//   optionSuccessStatus:200,
// }

// app.use(cors(corsOptions)) // Use this after the variable declaration
app.use(cors())

dotenv.config();

app.use("/api/auth", authRout);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);
const PORT = process.env.PORT || 8080;
app.listen(PORT, async () => {
  try {
    await connect();
    console.log(`Server is running!!`);
  } catch (err) {
    console.log(err);
  }
});
