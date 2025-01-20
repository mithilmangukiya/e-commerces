const mongoose=require("mongoose");

const connectmongoDB=async()=>{
    await mongoose.connect("mongodb://localhost:27017/ecommerce")
    .then(()=>{console.log("MongoDB Connected!");})
    .catch((err)=>{console.log(err);})
}

module.exports=connectmongoDB;  