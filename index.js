require("dotenv").config();

const express = require("express");
const userRouter = require("./Routes/userRouter");
const errorMessage = require("./middlewares/errorMessage");
const connect_db = require("./config/connect");
const app = express();


connect_db();


app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use("/api/user",userRouter)

app.use(errorMessage)


app.listen(process.env.PORT,()=>{
    console.log(`Server is started on Port ${process.env.PORT}`)
})

