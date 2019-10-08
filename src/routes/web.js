import express from "express";
import {home,auth} from './../controllers/index';
import {authVali} from './../validation/index';
/**
 * Init all routes
 * @param app from exactly express module
 */

let router=express.Router();

let initRouters=(app)=>{
    app.get("/",home.getHome);
   
   app.get("/login-register",auth.getloginReister);
   router.post("/register",authVali.register,auth.postRegister)
   return app.use("/",router);
}
module.exports=initRouters;