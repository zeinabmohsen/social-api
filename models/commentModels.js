const mongoose = require('mongoose');
const { schema } = require('./userModel');
const Schema = mongoose.Schema ;
const commentSchema = new mongoose.Schema({
    CommentOwner:{
        type: schema.type.ObjectId,
        ref:'User',
        required:true,
    },
    parentPost:{
        type:schema.type.ObjectId,
        ref:'Post',
        required:true,
    },
    //content may include text + emoijes
    content:{
        type:String,
        trim:true,
        maxlength:256
    },
    commentImage:{
        type:String,
    },
    commentVideo:{
        type:String,
    },
    commentLike:[{
        type:schema.type.ObjectId,
        ref:'User',
    }],
    commentReplies:[{
        type:schema.type.ObjectId,
        ref:'Comment',
    }]

},{timestamps:true}
)

module.exports = mongoose.model('Comment',commentSchema);