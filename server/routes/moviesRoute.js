const router=require("express").Router()
const authmiddleware = require("../middlwares/authmiddleware")
const Movie=require('../models/movieModel')

router.post("/add-movie",authmiddleware,async(req,res)=>{
    try{
        const newMovie=new Movie(req.body)
        await newMovie.save()
        res.send({
            success:true,
            message:"movie add"
        })
    }catch(err){
        res.send({
            success:false,
            message:err.message
        })
    }
})
 
 
   
router.get("/get-all-movies",authmiddleware,async(req,res)=>{
    try{
        const movies=await Movie.find()
        res.send({
            success:true,
            message:"All movie ",
            data:movies
        })
    }catch(err){
        res.send({
            success:false,
            message:err.message
        })
    }
})
 


router.put('/update-movie',async(req,res)=>{
    try{
        await Movie.findByIdAndUpdate(req.body.movieId,req.body)
        res.send({
            success:true,
            message:"movie update"
        })
    }catch(err){
        res.send({
            success:false,
            message:err.message
        })
    }
})



router.post('/delete-movie',authmiddleware,async(req,res)=>{
    try{
        await Movie.findByIdAndDelete(req.body.movieId)
        res.send({
            success:true,
            message:"movie delete"
        })
    }catch(err){
        res.send({
            success:false,
            message:err.message
        })
    }
})



module.exports=router       