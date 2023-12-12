import http from './http-common'; 

export async function addUser(u){
       return await http.post("/users",u);
}