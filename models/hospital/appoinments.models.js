import mongoose from "mongoose"

const appoinmentsSchema=new mongoose.Schema({
  AppointedPatient:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Patient'
  },
  appointeddoctor:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Doctor"
  },
  statuc:[
    {
      type:['PENDING','CANECELLED']
    }
  ]
},{timestamps:true})

export const Appointment=mongoose.model("Appointment",appoinmentsSchema)