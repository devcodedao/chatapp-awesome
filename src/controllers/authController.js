
import {validationResult, body} from 'express-validator/check';
let getloginReister=(req,res)=>{
    return res.render("auth/master");
}
let postRegister=(req,res)=>{
   let errArry=[]
    let validateErr=validationResult(req);
    if(!validateErr.isEmpty()){
        let erros=Object.values(validateErr.mapped());
        erros.forEach(item=>{
            errArry.push(item.msg)
        })
        console.log(errArry)
        return;
    }
   console.log(res.body)
}
module.exports={
    getloginReister:getloginReister,
    postRegister:postRegister
};