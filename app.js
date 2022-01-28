const express= require("express")
const app=express();
const mongoose=require("mongoose");
const morgan=require("morgan");
require("dotenv").config();
let cors=require("cors");
const userRoute=require("./routes/user");
const taskRoute=require("./routes/task");
let auth=require('./middlewares/auth');


//connect to MongoDB Atlas
mongoose.connect(process.env.DB_CONNECT,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log("connect to mongoDB Atlas")
}).catch(err=>{
    console.log(err);
})


//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan("dev"));


//routes
app.use("/api/user",userRoute);
app.use("/api/task",auth,taskRoute);





let port =8000 || process.env.PORT;
app.listen(port,()=>{
    console.log("server is running at port "+port);
})