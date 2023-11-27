// Importation du module Express
const express = require("express");

// Importation du contrôleur des produits
const productController = require("../controllers_server/products.controllers");

// Création d'un routeur Express
const router = express.Router();

// Définition des routes pour les opérations CRUD sur les produits

// Route GET "/products" pour récupérer tous les produits
router.route("/products")
  .get(productController.getAllProducts)
  // Route POST "/products" pour ajouter un nouveau produit
  .post(productController.addProduct);

// Route GET "/products/:id" pour récupérer un produit par son identifiant
// Route DELETE "/products/:id" pour supprimer un produit par son identifiant
// Route PATCH "/products/:id" pour mettre à jour juste ce qu'on veut modifier d'un produit par son identifiant
router.route("/products/:id")
  .get(productController.getProductById)
  .delete(productController.deleteProductById)
  .patch(productController.updateProduct);

// Exportation du routeur pour une utilisation ultérieure
module.exports = router;
