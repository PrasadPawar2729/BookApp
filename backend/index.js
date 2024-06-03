
const express = require('express');

const { connected } = require('./config/db');
const app = express()
const port =2023;

app.use(express.json())
app.get("/",(req,res)=>{
  res.send("hello")
})

app.listen(port,async()=>{
    try{

     await connected
     console.log("db is connected")
     console.log("server is connected port 2022")   
    }
    catch(err){
        console.log(err)
    }
})