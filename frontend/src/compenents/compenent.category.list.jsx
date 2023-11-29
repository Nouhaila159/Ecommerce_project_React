import { useEffect, useState } from "react";
import '../index.css';
import { Link } from "react-router-dom";
import { deleteCategoryByID, getAllCategory} from "../sevices/category.services";

export function CategoriesList() {
  const [categories, setCategories] = useState([]);

  // après l'affichage du composant
  useEffect(() => {
    fetchCategories();
  }, []);

  async function fetchCategories() {
    try {
      const res = await getAllCategory(); // Note the function call here
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
              <Link className="custom-button1" to={`/categories/edit/${category._id}`}>
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
      <Link to={"/categories/new"} className="custom-button">Nouvelle categorie</Link>
    </>
  );
}