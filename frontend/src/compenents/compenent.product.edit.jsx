import { useState , useEffect } from 'react';
import '../index.css';
import { getProductByID, updateProduct } from '../sevices/product.services';
import { useNavigate, useParams } from 'react-router-dom';

export function ProductEdit(){

       const [name,setName] = useState("");
       const [price,setPrice] = useState(0);
       const navigate=useNavigate();
       const {id}=useParams();
       useEffect( ()=>{
              fetchProducts();
       },[]);
       async function fetchProducts(){
              const response = await getProductByID(id);
              const p = response.data;
              setName(p.name);
              setPrice(p.price);
       }
       function handlForm(event){
         event.preventDefault(); 
         const p={"_id": id, "name":name,"price":price}
         updateProduct(p);
         navigate("/products");
       }
       
       return (
         <>
       <h1>Modifier un produits</h1>
       <form onSubmit={(e)=>handlForm(e)}>
         <label htmlFor='name'>Nom de produit</label>
         <input type='text' id='name' value={name}  onChange={(event)=>setName(event.target.value)}></input>
         <label htmlFor='price'>Prix de produit</label>
         <input type='number' id='price' value={price}  onChange={(event)=>setPrice(event.target.value)}></input>
         <input type='submit' value='Modifier'></input>
         <input type='reset' value='Annuler'></input>
         </form>
         </>
     );
}