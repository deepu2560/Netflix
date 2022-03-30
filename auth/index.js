const express = require("express");
const app = express();
app.use(express.json());
const connect = require("./configs/db");
const dotenv = require("dotenv");
const authRout = require("./controllers/auth");
const userRoute = require("./controllers/user_controller");
dotenv.config();

app.use("/api/auth", authRout);
app.use("/api/users", userRoute);
const PORT = process.env.PORT || 8080;
app.listen(PORT, async () => {
  try {
    await connect();
    console.log(`Server is running  bitch!!`);
  } catch (err) {
    console.log(err);
  }
});
