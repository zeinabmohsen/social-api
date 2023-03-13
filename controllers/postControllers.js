const  Post = require('../models/postModel');
const User = require('../models/userModel');

//create new post :

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