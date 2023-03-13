const mongoose = require('mongoose');
const Schema = mongoose.Schema ;
//user model :
const userSchema = new mongoose.Schema({
    fullName:{
        type: String,
        required:[true,"please enter your fullname"],
        trime:true
    },
    username:{
        type:String,
        unique:true,
        required:[true,'please enter your username'],
        trim:true
    },
    email:{
        type:String,
        unique:true,
        required:[true,'please enter your email']    
    },
    password:{
        type:String,
        required:[true,'please enter your password'],
        trim:true, 
        minlength:8,
    },
    friend:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    follwers:{
        type:Schema.Types.ObjectId,
        ref:'User',
    }
})

module.exports = mongoose.model('User',userSchema);