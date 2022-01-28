let router = require("express").Router();
let APIfeatures = require("../utils/APIfeatures");
let Task = require("../models/task");
let filter=require("../utils/filter");
router.post("/save", async (req, res) => {
  // api/task/save
  let {  name, color, desc, time,category } = req.body.task;
  let user=req.user
  try {
    let task = new Task({
      name,
      color,
      desc,
      createdBy: user._id,
      time,
      category,
    });
    await task.save();
    user.totalTime+=time;
    user.totalTask+=1;
    await user.save();    
    res.status(200).json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false });
  }
});
router.post("/search", async (req, res) => {
  let user = req.user;
  try {
    let APIfeature = new APIfeatures(Task.find(), req.query)
      .search(user).pagination()
    let result = await APIfeature.query;
    //console.log(result);
    res.status(200).json({ success: true,tasks:filter(result) });
  } catch (err) {
    res.status(401).json({ success: false });
  }
});

module.exports = router;
