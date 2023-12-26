const bcrypt = require("bcrypt")
const User = require("../models/User");
const { response } = require("express");
const jwt = require("jsonwebtoken");
const dotevn=require("dotenv");

dotevn.config()

async function saveUser(user){
       const salt=await bcrypt.genSalt();
       console.log(user);
       user.password=await bcrypt.hash(user.password,salt);
       return await User.create(user)
}

async function loginService(loginData){
  const user= await User.find({"email":loginData.email});
  if(user.length>0){
       const res=bcrypt.compare(loginData.password,user[0].password);
       if(res){
           const token=jwt.sign({"email":user[0].email},process.env.SECRET_KEY,{expiresIn: '1h'});
           return token;
       }
      
  }
}

module.exports = {saveUser,loginService};