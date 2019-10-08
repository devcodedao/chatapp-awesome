import express from "express";
import connectDB from './config/connectdb';
import ContactModel from './models/contact.model';
import configViewEngine from './config/viewEngin';
import initRouters from './routes/web';
import bodyParser from 'body-parser';
require('dotenv/config');
let app=express();
// connec moggoDB
connectDB();
// config view engine
configViewEngine(app);
//init all router
//enable post data request
app.use(bodyParser.urlencoded({extended:true}))
initRouters(app);
app.listen(process.env.APP_PORT,process.env.APP_HOST,()=>{
    console.log(`Listen in at hello ${process.env.APP_HOST}:${process.env.APP_PORT}`);
})
