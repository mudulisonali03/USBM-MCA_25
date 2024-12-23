const mongoose=require("mongoose");
require("dotenv").config();
const userSchema= new mongoose.Schema({
    name:{ type:String, 
         required:true},
    email:{type:String, 
        required:true},
    age:{type:Number, 
        required:true},    
    city:{type:String, 
        required:true},
    bloodgrp:{type:String, 
        required:true},    
},{timestamps:true}
) 
const userModel=mongoose.model("user",userSchema);
module.exports= userModel;