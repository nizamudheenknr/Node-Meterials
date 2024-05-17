// const express = require('express')
// const app = express();
// const port = 3030;
// app.use(express.json())
// app.get('/home',(req,res)=>{
//     const users =[
//         {id:1,name:"nizam"},
//         {id:2,name:"suhaib"},
//         {id:3,name:"nazal"}
//     ]
//     res.json(users);
// })

// app.post('/home',async (req,res)=>{
//     const {name }= req.body
//   await console.log(name);
//   res.status(200).json({message:"success"})
// })

// app.listen(port,()=>{
//     console.log(`server is running ${port}`);
// })

const express = require("express");
const mongoose = require("mongoose");
const router = require("./Route/route.js");

const app = express();
const port = 3030;

app.use(express.json())

app.use("/user",router)
mongoose
  .connect("mongodb://localhost:27017/")
  .then(() => console.log("db connected"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`listening server ${port}`);
});

