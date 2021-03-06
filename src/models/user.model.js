import mongoose from 'mongoose';
let Schema=mongoose.Schema;
let UserSchena=new Schema({
    username:String,
    gender:{type:String,default:"male"},
    phone:{type:String,default:null},
    address:{type:String,default:null},
    avatar:{type:String,default:"avatar-defaul.jpg"},
    role:{type:String,default:"user"},
    local:{
        email:{type:String,trim:true},
        password:String,
        isActive:{type:Boolean,default:false},
        veryfyToken:String
    },
    facebook:{
        uid:String,
        token:String,
        email:{type:String,trim:true}
    },
    google:{
        uid:String,
        token:String,
        email:{type:String,trim:true}
    },
    createAt:{type:Number,default:Date.now},
    updateat:{type:Number,default:null},
    deleteAt:{type:Number,default:null},
    
});
module.exports=mongoose.model("user",UserSchena)