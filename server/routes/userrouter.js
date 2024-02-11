const router=require("express").Router( )
const User =require('../models/userModel')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const authmiddleware = require("../middlwares/authmiddleware")
// password detecting
router.post('/register',async(req,res)=>{
    try{
    const userExists =await User.findOne({email:req.body.email})
    if (userExists){
        return res.send({
            success:false,
            message:"user already exists"
        })
    }

    const salt=await bcrypt.genSalt(9)
    const hashedpassword=await bcrypt.hash(req.body.password,salt)
    req.body.password=hashedpassword

    const newUser=await User(req.body)
    console.log(newUser)
    await newUser.save()
    res.send({
        success:true,
        message:"User Registered, Please login"
    })
    }catch(err){
        console.log(err)
    }
}) 

//user login
router.post('/login',async(req,res)=>{
    const user=await User.findOne({email:req.body.email})
    if (!user){
        return res.send({
            success:false,
            message:"Do not exists"
        })
    }

    const vaildPassword= await bcrypt.compare(req.body.password, user.password)

    if(!vaildPassword){
        return res.send({
            success:false,
            message:"invalid password"
        })
    }
    const token=jwt.sign({userId:user._id},process.env.secret_key_jwt,{expiresIn:'1d'})
    // console.log(token)
    res.send(
        {success:true,
        message:"User logged in",
        token:token

    }
    )

} )


router.get('/get-current-user',authmiddleware,async(req,res)=>{
    const user=await User.findById(req.body.userId).select('-password')
    res.send({
        success:true,
        message:"allowed to go to proteded router",
        data:user
    })
})

module.exports=router     