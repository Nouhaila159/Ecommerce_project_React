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
  const [productImage,setProductImage]=useState(null);
  const query=''
  
  const navigate=useNavigate();   
  useEffect(()=>{
    fetchCategories()
  },[query])

  async function fetchCategories() {
      const res = await getCategory(query); // Note the function call here
      setCategories(res.data);
  }

  async function handlForm(event){
    event.preventDefault();
    const formData=new FormData();
    const p={"name":name,"price":price,"category":categories[selectedCat]};
    formData.append("productData",JSON.stringify(p))
    formData.append("productImage",productImage)
    
    await addProduct(formData);
    navigate("/admin/products");
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
    <label className="form-label" htmlFor='price'>Image :</label>
    <input className="form-control" type="file" onChange={e=>setProductImage(e.target.files[0])}/>
      
    <input type='submit' value='Ajouter à la liste'></input>
    <input type='reset' value='Réinitialiser'></input>
    </form>
    </>
);
}
