const express = require('express');
const app = express();
const DB = require('./database').connectDB;

// import routes:
const userRouter = require("./routes/userRouter");
DB();
app.use(express.json());
//path:
app.use("/api/registration",userRouter);

// route :
  // 1.http + local host ==> http://localhost:4000
  // 2./api/registration
  // 3./register

app.listen(4000,()=>{
    console.log("listen to port 4000");
})

