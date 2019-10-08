import mongoose from "mongoose";
import bluebird from "bluebird";
require('dotenv/config');

var connectDB = () => {
    mongoose.Promise = bluebird;
    var URL=`${process.env.DB_CONNECTION}://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
  
    return mongoose.connect(URL,{useMogoClinet:true})
}
module.exports=connectDB;