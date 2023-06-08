const { response } = require("express");
const TaskModule=require("../modules/taskmodules");

module.exports.task=async (req,res)=>{
    const {user}=req.params;
    console.log(req.params);
    const task=await TaskModule.find({"user":user})
    console.log(task,"is data");
    res.send(task);
}

module.exports.sendtask=async(req,res)=>{
    const task=req.body;

    TaskModule.create(task).then((data)=>{console.log(data); res.status(200).send(data)}).catch(error=>console.log(error));
    
}