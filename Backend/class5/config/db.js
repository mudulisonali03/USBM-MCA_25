const mongoose=require("mongoose");
require("dotenv").config();
//create connection for database

const connection=async()=>{
try{
    const conn=await  mongoose.connect(process.env.MONGO_URL);
    console.log (`connected to mongoDB:${conn.connection.host}`);
}catch(error){
    console.log(`Error connecting to mongoDB: ${error.message}`);
    process.exit(1);
}

};
module.exports= {
    connection,
}