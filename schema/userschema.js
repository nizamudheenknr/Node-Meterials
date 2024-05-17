const mongoose = require("mongoose")

const user=new mongoose.Schema({
    username:{
        type:String,
    },
    email:{
        type:String,
    } ,
    password:{
        type:String
    }
})

const users = mongoose.model("users",user)
module.exports=users