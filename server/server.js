const express=require('express')//install express
const app=express()
const PORT=8080

const cors=require('cors')//cors is a security layer and while developing it need to by pass,  it's not a error or bug 
 
require('dotenv').config() //install dotenv and it will config in maner which can be use it for any of file
const db=require('./config/dbconfig')
const userRouter=require('./routes/userrouter')
const movieRouter=require('./routes/moviesRoute')
const theatreRouter=require('./routes/theatreRoute')
// app.get("/",(req,res)=>{
//     res.send("hello")
// })
app.use(cors())
app.use(express.json())
app.use('/api/user',userRouter)
app.use('/api/movie',movieRouter)
app.use('/api/theatres',theatreRouter)



app.listen(PORT,()=>{
    console.log(`server id running at ${PORT}`)
})