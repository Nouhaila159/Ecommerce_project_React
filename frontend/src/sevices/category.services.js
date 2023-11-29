import http from './http-common'; 

export async function getAllCategory(){
       return await http.get("/categories");
}
export async function deleteCategoryByID(id){
       return await http.delete(`/categories/${id}`);
}
export async function addCategory(category){
       return await http.post("/categories",category);
}
export async function getCategoryByID(id){
       return await http.get(`/categories/${id}`);
}
export async function updateCategory(category){
       return await http.patch(`/categories/${category._id}`,category);
}
