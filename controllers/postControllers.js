const  Post = require('../models/postModel');
const User = require('../models/userModel');

//create new post :
exports.createpost = async(req,res)=>{
    const postOwner = await User.findById(req.body.postOwner);
    if(!postOwner){
        return res.status(400).json({message:'a bad request'});
    }

    const newPost = await Post.create({
        postOwner:req.body.postOwner,
        content:req.body.content
    })
    res.status(200).json({message:"post created successfully",data:newPost});
}

//like:
exports.likeUnlike = async (req,res) =>{
    try{
        //check if the post is still available
        //check if the post already liked by the user
            //if yes remove like
            //if no add user to the list of  likers
       const post = await Post.findById(req.params.postID);
       if(!post) return res.status(404).json({message:'Post is not longer available'});
       if(!post.likes.includes(req.body.userID)){
        await post.updateOne({$push:{likes:req.body.userID}})
        res.status(200).jspn({message:"post has been disliked"});
       }
    }catch(err){
        console.log(err);

    }
}