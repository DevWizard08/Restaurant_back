import mongoose from "mongoose";

 export const dbConnection = () =>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName: "RESTAURANT"
    } ).then (()=>{
        console.log("Connected to database Succesfully");
    }).catch(err=>{
        console.log(`Some Error Occured while Connecting ${err}`);
    });
}



