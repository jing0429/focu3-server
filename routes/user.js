let router = require("express").Router();
let User = require("../models/user");

router.post("/info", async (req, res) => {
  //api/user/info
  let { userID } = req.body;
  console.log(userID);
  try {
    let user = await User.findById(userID);
    if (user) {
      return res.status(200).json({
        success: true,
        user,
      });
    } else
      res.status(404).json({
        success: false,
        message: "User not Fount",
      });
  } catch (err) {
    res.status(400).json({
      success: false,
    });
  }
});

router.post("/login", async (req, res) => {
  // /api/user/login
  let { username, email, photoUrl } = req.body;
  try {
    let userExist = await User.findOne({ email });
    if (userExist) {
      //已經存取過
      userExist.photoUrl = photoUrl;
      console.log("user exist");
      await userExist.save();
      res.status(200).json({ success: true, user: userExist._id });
    } else {
      let user = new User({ username, email, photoUrl });
      console.log("new user save");
      await user.save();
      res.status(200).json({ success: true, user: user._id });
    }
  } catch (err) {
    res.status(401).json({ success: false });
  }
});

module.exports = router;
