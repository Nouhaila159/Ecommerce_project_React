const Category=require("../models/Category")
const Product=require("../models/Product")


async function getAllCategories(req, res) {
       try{
       const categories = await Category.find();
       res.status(200).json(categories);
       }catch(error){
       res.status(500).send("Erreur dans le serveur");
      }
}

async function addCategory(req, res) {
       try{
              await Category.create(req.body);
              res.status(201).send("Category Bien ajoutée");
       }catch(error){
              res.status(500).send("Erreur dans l'ajout de category");
       }
}

async function getCategoryById(req,res){
       const idC=req.params.id;
       try{
       const category=await Category.findById(idC);
       res.json(category);
       }catch(error){
       res.status(500).send("Erreur dans le serveur");
       }

}


async function deleteCategoryById(req,res){
       const idC = req.params.id;
       try{
       await  Category.findByIdAndDelete(idC);
       // Supprimer les produits associés
       await Product.deleteMany({ category: idC });
       res.send("La categorie a était bien supprimée");
       }catch(error){
       res.status(500).send("Erreur dans la suppression de categorie");
       }
      
}

async function updateCategory(req,res){
       const idC = req.params.id;
       try{
       await Category.findByIdAndUpdate(idC,req.body);
       res.send("La categorie a était bien modifiée");
       }catch(error){
       res.status(500).send("Erreur dans la suppression de categorie");
       }
       
}


module.exports={getAllCategories,addCategory,getCategoryById,deleteCategoryById,updateCategory}
