const mongoose = require('mongoose');

async function connectDb() {
    try{
        await mongoose.connect("mongodb://localhost:27017/ecommerce_Web")
        console.log(process.env.MONGO_URL)
        console.log("mongodb connected")
    }
    catch(error){
        console.log("connect error")
    }
    
}

module.exports={
    connectDb,
}