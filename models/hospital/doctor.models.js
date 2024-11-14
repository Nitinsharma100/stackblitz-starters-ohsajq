import mongoose from "mongoose"

const doctorSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  specialized:{
    type:String,
    required:true
  },
  phone:{
    type:Number,
    required:true
  },
},{timestamps:true})

export const Doctor=mongoose.model("Doctor",doctorSchema)