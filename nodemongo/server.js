const express=require('express');
const cors=require('cors');
const app=express();
const dotenv=require("dotenv");
const router=require("./routes/router")
const { default: mongoose } = require('mongoose');

dotenv.config();


app.use(express.json());
app.use(cors());


mongoose.connect(process.env.MONGO_URL).then(()=>console.log("connected")).catch((error)=>console.log(error))

// app.get('/',(req,res)=>{
    //     res.send("Welcome to mongo server");
    // }) 
    
app.use('/',router);


// sOVZ7v54mfFshvza


app.listen(5000,()=>{
    console.log("server is running");
});