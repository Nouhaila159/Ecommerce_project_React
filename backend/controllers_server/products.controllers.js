const Product=require("../models/Product")

async function getAllProducts(req, res) {
       try{
       const product = await Product.find().populate("category");
       res.json(product);
       }catch(error){
       res.status(500).send("Erreur dans le serveur");
      }
}
   

async function getProductById(req,res){
       const idP=req.params.id;
       try{
       const product = await Product.findById(idP).populate("category");
       res.json(product);
       }catch(error){
       res.status(500).send("Erreur dans le serveur");
       }

}

async function addProduct(req,res){
       try{
       const product = await Product.create(req.body);
       res.status(201).json(product);
       }catch(error){
       res.status(500).send("Erreur dans l'ajout de produit");
       }
}

async function deleteProductById(req,res){
       const idP = req.params.id;
       try{
       const product = await Product.findByIdAndDelete(idP);
       res.send("Le produit a était bien supprimé");
       }catch(error){
       res.status(500).send("Erreur dans la suppression de produit");
       }
      
}

async function updateProduct(req,res){
       const idP = req.params.id;
       try{
       const product = await Product.findByIdAndUpdate(idP,req.body);
       res.send("Le produit a était bien modifié");
       }catch(error){
       res.status(500).send("Erreur dans la suppression de produit");
       }
       
}

module.exports={getAllProducts, getProductById, addProduct, deleteProductById, updateProduct}
