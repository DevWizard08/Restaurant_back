import mongoose from "mongoose";
import validator from "validator";


const reservationSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength: [3,"First Name must contains at least 3 characters"],
        maxLength: [30,"First Name cannot exceed 30 characters"]

    },
    lastName:{
        type:String,
        required:true,
        minLength: [3,"Last Name must contains at least 3 characters"],
        maxLength: [30,"Last Name cannot exceed 30 characters"]

    },
    email:{
        type:String,
        required:true,
        validate: [validator.isEmail,"Provide a valid Email"]
        },

     phone:{
         type:String,
         required:true,
         minLength: [11,"Phone Number Must contain 11 digit"],
         maxLength: [11,"Phone Number Must contain 11 digit"]
            },
      
    time:{
        type:String,
        required:true,
              
             },    
    date:{
        type:String,
        required:true,
            }
})

export const Reservation = mongoose.model("Reservation",reservationSchema);