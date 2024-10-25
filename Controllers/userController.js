const asyncHandler = require("express-async-handler");
const userModel = require("../models/userModel");
const bcrypt = require("bcrypt")
const nodemailer = require("nodemailer")
// asynchandler is used for exception handling



// generate OTP

const generateOTP = ()=>{
    const random = Math.random() * 999999
    const round = Math.round(random)

    return round
}









const RegisterUser =asyncHandler(async(req,res)=>{
    // res.send("Register Users")

    // get data
    const {f_name,l_name,dob,gender,email,password} = req.body;

    if(!f_name || !l_name || !dob || !gender || !email || !password)
    { 
        res.status(400) // bad request
        throw new Error(" Please entered all the data")
    }

    
        // encrypt the password
        const hashedpassword = await bcrypt.hash(password,10)




        // check if email exists

        const checkEmail = await userModel.findOne({
            email: email,
        });

        if(checkEmail){
            res.status(401); // Unauthorized
            throw new Error("Email already exists")
        }

            const otp = generateOTP();


        // send the data to the data base
        const created_user = await userModel.create({
            f_name : f_name, // first key  is backend : after colon is front end
            l_name : l_name,
            dob: dob,
            gender: gender,
            email : email,
            password: hashedpassword,
            otp:otp     
        })


                    // Node mailer
                const transporter =nodemailer.createTransport({
                        service:'gmail',
                        auth:{
                            user:process.env.MAIL_USERNAME,
                            pass:process.env.MAIL_PASSWORD
                        }
                })
        
                // what should be send in the mail

            const option = {
                from:process.env.MAIL_USERNAME,
                to:email,
                subject:'OTP for account verification',
                text:`Your otp is ${otp}`
            }


                    // send mail
                    transporter.sendMail(option,(err,info)=>{
                        if(err){
                            console.log(err.message)
                        }else{
                            console.log("Email send success")
                        }
                    })




    // res.json({
    //     f_name,l_name,dob,gender,email,password
    // })

    res.send(created_user)
});


module.exports = {
    RegisterUser
}