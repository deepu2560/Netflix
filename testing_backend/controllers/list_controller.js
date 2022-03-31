const router = require("express").Router();
const { type } = require("express/lib/response");
const List = require("../models/list_model");
const verify = require("../verifyToken");

// ***********************************************************************************************************************
// CREATE LIST
// ***********************************************************************************************************************

router.post("/", verify, async (req, res) => {
  if (req.user.isAdmin) {
    const newList = new List(req.body);
    try {
      const savedList = await newList.save();
      res.status(201).json(savedList);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not an Admin!");
  }
});

// ***********************************************************************************************************************
// DELETE LIST
// ***********************************************************************************************************************

router.delete("/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await List.findByIdAndDelete(req.params.id);
      res.status(201).json("List Deleted");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not an Admin!");
  }
});

// ***********************************************************************************************************************
// GET LIST
// ***********************************************************************************************************************

router.get("/", verify, async (req, res) => {
  const typeQuery = req.query.type;
  const genreQuery = req.query.genre;
  let list = [];

  try {
    if (typeQuery) {
      if (genreQuery) {
        list = await List.aggregate([
          { $sample: { size: 10 } },
          { $match: { type: typeQuery, genre: genreQuery } },
        ]);
      } else {
        list = await List.aggregate([
          { $sample: { size: 10 } },
          { $match: { type: typeQuery } },
        ]);
      }
    } else {
      list = await List.aggregate([{ $sample: { size: 10 } }]);
    }
    res.status(200).json(list);
  } catch (err) {
    res.status(500).json(err);
  }
});

// ***********************************************************************************************************************
// CREATE LIST
// ***********************************************************************************************************************

module.exports = router;
