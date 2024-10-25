const mongoose = require("mongoose");

// b;ue print table create
// create collection in Mongodb for the use of data from front end to backend


const userSchema = mongoose.Schema({
    f_name:{
        type:String,
        required:true
    },

    l_name:{
        type:String,
        required:true
    },

    dob:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }, 
    password:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:false,
        default:null
    },
    otp:{
        type:Number,
        required:false,
        default:null
    }

},
{
    timestamp:true
}
);

module.exports = mongoose.model('Users',userSchema)