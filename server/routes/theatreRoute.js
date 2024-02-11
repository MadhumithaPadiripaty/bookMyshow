const router=require("express").Router()
const authmiddleware = require("../middlwares/authmiddleware")
const Show = require("../models/showModel")
const Theatre=require('../models/theatreModal')



router.post('/add-theatre',authmiddleware,async(req,res)=>{
    try{
        const newTheatre=new Theatre(req.body)
        await newTheatre.save()
        res.send({
            success:true,
            message:"threatre Added"
        })
    }catch(err){
        res.send({
            success:false,
            message:err.message
        })
    } 
}) 
        
  
//get threatre for owner specific
router.post('/get-all-theatre-by-owner',authmiddleware,async(req,res)=>{
    try{
        const theatre=await Theatre.find({owner:req.body.owner})
        res.send({
            success:true,
            message:"threatre Added",
            data:theatre
        })
    }catch(err){
        res.send({
            success:false,
            message:err.message
        })
    } 
})


router.put('/update-theatre',authmiddleware,async(req,res)=>{
    try{
        await Theatre.findByIdAndUpdate(req.body.theatreId,req.body)
        res.send({
            success:true,
            message:"threatre update",
        })
    }catch(err){
        res.send({
            success:false,
            message:err.message
        })
    } 
})

router.post('/delete-theatre',authmiddleware,async(req,res)=>{
    try{
        await Theatre.findByIdAndDelete(req.body.theatreId)
        res.send({
            success:true,
            message:"threatre deleted",
        })
    }catch(err){
        res.send({
            success:false,
            message:err.message
        })
    } 
})


router.get('/get-all-theatre',authmiddleware,async(req,res)=>{
    try{
        const theatre=await Theatre.find().populate('owner')
        res.send({
            success:true,
            message:"threatre fetched",
            data:theatre
        })
    }catch(err){
        res.send({
            success:false,
            message:err.message
        })
    } 
}) 

//add show
router.post('/add-show',authmiddleware,async(req,res)=>{
    try{
        const newShow=new Show(req.body)
        res.send({
            success:true,
            message:"threatre deleted",
        })
    }catch(err){
        res.send({
            success:false,
            message:err.message
        })
    } 
})

  

module.exports=router    