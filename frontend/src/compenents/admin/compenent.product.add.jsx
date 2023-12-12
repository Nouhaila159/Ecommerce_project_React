import { useState , useEffect } from 'react';

import '../../index.css';
import { addProduct, getAllProduct } from '../../sevices/product.services';
import { useNavigate } from 'react-router-dom';
import { getCategory } from '../../sevices/category.services';


export function ProductAddForm(){
  const [name,setName] = useState("");
  const [price,setPrice] = useState(0);
  const [selectedCat,setSelectedCat]= useState(0);
  const [categories, setCategories]=useState([]);
  const navigate=useNavigate();  
  useEffect(()=>{
    fetchCategories()
  },[])

  async function fetchCategories() {
      const res = await getCategory(); // Note the function call here
      setCategories(res.data);
  }

  async function handlForm(event){
    event.preventDefault();
    const p={"name":name,"price":price,"category":categories[selectedCat]};
    await addProduct(p);    
    navigate('/admin/products');
    }
  
  return (
    <>
  <h1>Ajouter un produit</h1>
  <form onSubmit={(e)=>handlForm(e)}>
    <label htmlFor='name'>Nom de produit :</label>
    <input type='text' id='name' placeholder='saisir un nom'  onChange={(event)=>setName(event.target.value)}></input>
    <label htmlFor='price'>Prix de produit :</label>
    <input type='number' id='price' placeholder='saisir un prix' onChange={(event)=>setPrice(event.target.value)}></input>
    <label htmlFor='category'>Categorie :</label>
    <select type="text" id="Category" name="Category" onChange={(e)=> setSelectedCat(e.target.value)}>
      {categories.map((cat, index) => (<option key={index} value={index}>{cat.name}</option>))}
    </select>
    <input type='submit' value='Ajouter à la liste'></input>
    <input type='reset' value='Réinitialiser'></input>
    </form>
    </>
);
}
