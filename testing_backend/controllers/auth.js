const router = require("express").Router();
const User = require("../models/user_model");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//REGISTER
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(req.body.password, "netflix").toString(),
  });
  try {
    const user = await newUser.save();
    return res.status(201).json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(401).json("Wrong password or email-ID!");

    const bytes = CryptoJS.AES.decrypt(user.password, "netflix");
    const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

    originalPassword !== req.body.password &&
      res.status(401).json("Wrong password or email-ID!");

    const accessToken = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      "netflix",
      { expiresIn: "5d" }
    );

    const { password, ...info } = user._doc;

    res.status(200).json({ ...info, accessToken });
  } catch (err) {
    return res.status(500).send(err);
  }
});

module.exports = router;
