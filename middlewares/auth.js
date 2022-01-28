let User=require("../models/user");
let auth=async(req,res,next)=>{
    let {userID}=req.body;
    let userExist=await User.findById(userID);
    if(userExist){
        req.user=userExist;
        next();
    }
    else res.status(403).json({success:false});   
}

module.exports=auth;