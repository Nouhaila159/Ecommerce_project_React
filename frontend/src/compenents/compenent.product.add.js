import { useState , useEffect } from 'react';

import '../index.css';
import { addProduct, getAllProduct } from '../sevices/product.services';
import { useNavigate } from 'react-router-dom';


export function ProductAddForm(){
  const [name,setName] = useState("");
  const [price,setPrice] = useState(0);
  const navigate=useNavigate();
  
  function handlForm(event){
    event.preventDefault(); 
    const p={"name":name,"price":price}
    addProduct(p);
    navigate("/products");
  
  }
  
  return (
    <>
  <h1>Ajouter un produits</h1>
  <form onSubmit={(e)=>handlForm(e)}>
    <label htmlFor='name'>Nom de produit</label>
    <input type='text' id='name' placeholder='saisir un nom'  onChange={(event)=>setName(event.target.value)}></input>
    <label htmlFor='price'>Prix de produit</label>
    <input type='number' id='price' placeholder='saisir un prix' onChange={(event)=>setPrice(event.target.value)}></input>
    <input type='submit' value='Ajouter à la liste'></input>
    <input type='reset' value='Réinitialiser'></input>
    </form>
    </>
);}
