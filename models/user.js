let mongoose =require("mongoose");


let UserSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        minlength:2
    },
    email:{
        type:String,
        required:true,
    },
    photoUrl:{
        type:String,
        required:true
    },
    totalTime:{
        type:Number,
        default:0
    },
    totalTask:{
        type:Number,
        default:0
    },
})


let User=mongoose.model("User",UserSchema);
module.exports= User;