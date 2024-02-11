const mongoose=require('mongoose')//connecting Node.js to MongoDB using mongoose and //install mongoose

mongoose.connect(process.env.mongo_url) //Trying to connect to a database which is like a request is being made -it's a promise phase
.then(()=>{
    console.log("Connection Established")
}).catch((error)=>{
    console.log(error)
})
