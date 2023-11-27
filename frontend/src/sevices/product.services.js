import http from './http-common'; 

export async function getAllProduct(){
       return await http.get("/products");
}
export async function deleteProductByID(id){
       return await http.delete(`/products/${id}`);
}
export async function addProduct(product){
       return await http.post("/products",product);
}

