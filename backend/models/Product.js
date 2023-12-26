// Importation du module Mongoose
const mongoose = require("mongoose");

// Définition d'un schéma de produit
const productSchema = new mongoose.Schema({
  name: String,  // Champ "name" de type String (chaîne de caractères)
  price: Number, // Champ "price" de type Number (nombre)
  image:String, 
  category:{
      type:mongoose.Types.ObjectId,
      ref:"Category"
  }
});

// Création d'un modèle Mongoose basé sur le schéma
const Product = mongoose.model("Product", productSchema);

// Exportation du modèle Product pour une utilisation ultérieure
module.exports = Product;