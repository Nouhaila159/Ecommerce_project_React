import { useState , useEffect } from 'react';
import '../../index.css';
import { getCategoryByID, updateCategory } from '../../sevices/category.services';
import { useNavigate, useParams } from 'react-router-dom';

export function CategoryEdit(){

       const [name,setName] = useState("");
       const navigate=useNavigate();
       const {id}=useParams();

       useEffect(() => {
              console.log('Fetching category with ID:', id);
              fetchCategories();
            }, []);
            
       async function fetchCategories() {
              try {
                const response = await getCategoryByID(id);
                const c = response.data;
                console.log('Category data:', c);
                setName(c.name);
                console.log('Name after setting:', name);
              } catch (error) {
                console.error('Error fetching category:', error);
              }
            }

       async function handlForm(event){
         event.preventDefault(); 
         const c={"_id": id, "name":name}
         await updateCategory(c);
         navigate("/admin/categories");
       }
       
       return (
         <>
       <h1>Modifier une categorie</h1>
       <form onSubmit={(e)=>handlForm(e)}>
         <label htmlFor='name'>Nom de categorie :</label>
         <input type='text' id='name' value={name}  onChange={(event)=>setName(event.target.value)}></input>
         <input type='submit' value='Modifier'></input>
         <input type='reset' value='Annuler'></input>
         </form>
         </>
     );
}