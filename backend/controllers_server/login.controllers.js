const loginServices=require("../services/login.services")

async function addUser(req,res){
       try{
       const user = await loginServices.saveUser(req.body);
       res.status(201).json(user);
       }catch(error){
       console.log(error);
       res.status(500).send("Erreur dans l'ajout de l'utilisateur");
       }
}

module.exports={addUser}
