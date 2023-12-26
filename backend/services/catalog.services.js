const Product=require("../models/Product")
const Category=require("../models/Category")

async function findProducts() {
       return await Product.find().populate("category");

}

async function findProductById(idP){
       return await Product.findById(idP).populate("category");

}

async function findProductByQuery(query){
       return await Product.find({name:{$regex:query,$options:"i"}}).populate("category");
}

async function saveProduct(p){
       
       return await Product.create(p);
      
}

async function removeProductById(idP){
       return Product.findByIdAndDelete(idP);
}

async function editProduct(idP,p){
       return await Product.findByIdAndUpdate(idP,p);      
}

async function findCategories() {
       return await Category.find();
}


async function saveCategory(c) {
       return Category.create(c);
}

async function findCategoryById(idC){
       return await Category.findById(idC);
}

async function findCategoryByQuery(query){
       return await Category.find({name:{$regex:query,$options:"i"}})
}


async function removeCategoryById(idC){
       await  Category.findByIdAndDelete(idC);
       await Product.deleteMany({ category: idC });
      
}

async function editCategory(idC,c){

       return await Category.findByIdAndUpdate(idC,c);
       
}

module.exports={findProducts, findProductById, saveProduct, removeProductById, editProduct,
findCategories,findCategoryById,findCategoryByQuery,saveCategory,editCategory,removeCategoryById,findProductByQuery}
