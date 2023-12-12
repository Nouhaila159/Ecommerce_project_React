const bcrypt = require("bcrypt")
const User = require("../models/User")

async function saveUser(u){
       const salt=await bcrypt.genSalt();
       console.log(u);
       u.password=await bcrypt.hash(u.password,salt);
       return await User.create(u)
}

module.exports = {saveUser};