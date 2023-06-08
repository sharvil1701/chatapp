const mongoose = require("mongoose")
const taskSchema = new mongoose.Schema({
    user:{
        type:String,
        require:true
    },
    message:{
        type:String,
        require:true
    }
})

module.exports = mongoose.model("Task",taskSchema);