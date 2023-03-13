const mongoose = require('mongoose');
const { schema } = require('./userModel');
const postSchema = new mongoose.Schema ({
    postOwner:{
        type:Schema.types.Objectid,
        ref:'User',

    },
    img:{
        type:string,
        default:'',   
    },
    content:{
        type:string,
        required:true,
        minLength:5,
        maxlength:500,
        trime:true
    },
    video:{
        type:string,
        default:'',          
    },

    likes:[{
        type:schema.types.Objectid,
        ref:'User',
    }],
    comments:[{
        type:schema.types.Objectid,
        ref:'Comment',        
    }],
},
{timestamps:true}
);

module.exports=mongoose.module('Post','postSchema')