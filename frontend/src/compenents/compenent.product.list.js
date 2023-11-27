import { useEffect, useState } from "react";
import '../index.css';
import { deleteProductByID, getAllProduct } from "../sevices/product.services";
import { Link } from "react-router-dom";

export function ProductsList() {
  const [products, setProducts] = useState([]);

  // après l'affichage du composant
  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    try {
      const res = await getAllProduct(); // Note the function call here
      setProducts(res.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  async function deleteProduct(id) {
    try {
      const res = await deleteProductByID(id);
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  }

  return (
    <>
      <h1>Liste des produits</h1>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prix</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <button onClick={() => deleteProduct(product._id)}>
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to={"/products/new"} className="custom-button">Nouveau produit</Link>
    </>
  );
}
