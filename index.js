const express = require("express");

//set up express 
const app = express();

//listen for request 
app.listen( process.env.port || 4000,()=>{
    console.log("server is running");
    
})


