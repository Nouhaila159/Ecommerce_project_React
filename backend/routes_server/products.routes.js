// Importation du module Express
const express = require("express");

// Importation du contrôleur des produits
const productController = require("../controllers_server/products.controllers");
const loginMiddelware = require("../middelwares/login.middelware");


// Création d'un routeur Express
const router = express.Router();
const multer=require("multer");

const storage=multer.diskStorage({
       destination:(req,file,cb)=>{
              cb(null,"C:/Users/nouhaila/Desktop/NodeJs/TPs_REACT/projet_ecommerce/backend/uploads");
              
       },
       filename:(req,file,cb)=>{
              cb(null,file.originalname);
       }
});

const upload = multer({ storage: storage });

// Définition des routes pour les opérations CRUD sur les produits

// Route GET "/products" pour récupérer tous les produits
router.route("/")
  .get(loginMiddelware.jwtVerify,productController.getAllProducts)
  // Route POST "/products" pour ajouter un nouveau produit
  .post(loginMiddelware.jwtVerify,upload.single("productImage"),productController.addProduct);

// Route GET "/products/:id" pour récupérer un produit par son identifiant
// Route DELETE "/products/:id" pour supprimer un produit par son identifiant
// Route PATCH "/products/:id" pour mettre à jour juste ce qu'on veut modifier d'un produit par son identifiant
router.route("/:id")
  .get(productController.getProductById)
  .delete(productController.deleteProductById)
  .patch(productController.updateProduct);

// Exportation du routeur pour une utilisation ultérieure
module.exports = router;
