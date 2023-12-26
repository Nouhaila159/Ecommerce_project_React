import { useState , useEffect } from 'react';

import '../../index.css';
import { getProductByID, updateProduct } from '../../sevices/product.services';
import { useNavigate, useParams } from 'react-router-dom';
import { getCategory } from '../../sevices/category.services';

export function ProductEdit(){
  const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [selectedCat, setSelectedCat] = useState('');
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams();
    const query=''

    useEffect(() => {
        fetchProduct();
        fetchCategories();
    }, [query]);

    async function fetchProduct() {
      try {
          const response = await getProductByID(id);
          const p = response.data;
          console.log('Product data:', p);
          setSelectedCat(p.category && p.category._id ? p.category._id : '');
          setName(p.name);
          setPrice(p.price);
      } catch (error) {
          console.error("Error fetching product:", error);
      }
  }
  

    async function fetchCategories() {
        try {
            const res = await getCategory(query);
            setCategories(res.data);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    }

    async function handlForm(event) {
        event.preventDefault();
        const updatedProduct = { "_id": id, "name": name, "price": price, "category": selectedCat };
        await updateProduct(updatedProduct);
        navigate("/admin/products");
    }

       
       return (
         <>
       <h1>Modifier un produit</h1>
       <form onSubmit={(e)=>handlForm(e)}>
         <label htmlFor='name'>Nom de produit :</label>
         <input type='text' id='name' value={name}  onChange={(event)=>setName(event.target.value)}></input>
         <label htmlFor='price'>Prix de produit :</label>
         <input type='number' id='price' value={price}  onChange={(event)=>setPrice(event.target.value)}></input>
         <label htmlFor="Category">Categories :</label>
         <select
            value={selectedCat}
            onChange={(e) => setSelectedCat(e.target.value)}
        >
            {categories.map((category) => (
                <option key={category._id} value={category._id}>
                    {category.name}
                </option>
            ))}
        </select>
         <input type='submit' value='Modifier'></input>
         <input type='reset' value='Annuler'></input>
         </form>
         </>
     );
}