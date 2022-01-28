let mongoose=require("mongoose");

let TaskSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    color:{
        type:String,
        required:true
    },
    time:{
        type:Number,
        default:0
    },
    category:{
        type:String
    },
    desc:{
        type:String,
        default:""
    },
    createdAt:{
        type:Date,
        default: new Date,
        expires:"10080m"
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    }
})

let Task=mongoose.model("Task",TaskSchema);
module.exports=Task;