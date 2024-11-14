import mongoose from "mongoose"

const patientSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  age:{
    type:Number,
    required:true
  },
  gender:[
   {
     type:['M','F','O']
   }
  ],
  address:{
    type:String,
    required:true
  },
  phone:{
    type:Number,
    required:true
  },

},{timestamps:true})

export const Patient=mongoose.model("Patient",patientSchema)