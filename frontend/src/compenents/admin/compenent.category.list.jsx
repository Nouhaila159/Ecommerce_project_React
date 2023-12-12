import { useEffect, useState } from "react";
import '../../index.css';
import { Link } from "react-router-dom";
import { deleteCategoryByID, getCategory} from "../../sevices/category.services";

export function CategoriesList() {
  const [categories, setCategories] = useState([]);
  const [query, setQuery] = useState("");

  // après l'affichage du composant
  useEffect(() => {
    fetchCategories();
  }, [query]);

  async function fetchCategories() {
    try {
      const res = await getCategory(query); // Note the function call here
      setCategories(res.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  }

  async function deleteCategory(id) {
    try {
      const res = await deleteCategoryByID(id);
      fetchCategories();
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  }

  return (
    <>
      <h1>Liste des categories</h1>
      <form>
        <input type="search" onChange={e=>setQuery(e.target.value)} placeholder="Entrez un mot clé"/>
      </form>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => (
            <tr key={index}>
              <td>{category.name}</td>
              <td>
              <Link className="custom-button1" to={`/admin/categories/edit/${category._id}`}>
                  Modifier
                </Link>
                <button className="custom-button2" onClick={() => deleteCategory(category._id)}>
                  Supprimer
                </button>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to={"/admin/categories/new"} className="custom-button">Nouvelle categorie</Link>
    </>
  );
}