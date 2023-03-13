const User = require('./userControllers');
const bcrypt = require('bcrypt');

exports.registerUsers=async (req,res) =>{
    const user = await User.findOne({$or:[{email:req.body.email},{username:req.body.username}]});
    try{
    if(user){
        res.status(409).json({message:'user already exist'});

        const salt = await bcrypt.genSalt();
        const hashedpassword = await bcrypt .hash(req.body.password,salt);

        const newUser = await User.create({
            fullName:req.body.fullName,
            username:req.body.username,
            email:req.body.email,
            password:hashedpassword
        })

        res.status(201).json({message:'user created',data:newUser});
    }
}catch(err){
    console.log(err);
}
}