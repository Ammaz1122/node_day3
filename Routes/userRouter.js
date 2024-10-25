const express = require('express');
const {  RegisterUser } = require('../Controllers/userController');

const userRouter = express.Router();

userRouter.post("/register-user",RegisterUser)


module.exports = userRouter