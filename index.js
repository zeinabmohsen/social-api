const express = require('express');
const app = express();
const DB = require('./database').connectDB;

DB();
app.use(express.json());

app.listen(4000,()=>{
    console.log("listen to port 4000");
})