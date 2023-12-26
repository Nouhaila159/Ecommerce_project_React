import { useEffect, useState } from "react";
import '../../index.css';
import { deleteProductByID, getProduct } from "../../sevices/product.services";
import { Link } from "react-router-dom";

export function ProductsList() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");

  // après l'affichage du composant
  useEffect(() => {
    fetchProducts();
  }, [query]);

  async function fetchProducts() {
    try {
      const res = await getProduct(query); // Note the function call here
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
      <form>
        <input type="search" onChange={e=>setQuery(e.target.value)} placeholder="Entrez un mot clé"/>
      </form>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prix</th>
            <th>Categorie</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.category.name}</td>
              <td><img height={100} width={100} src={`http://localhost:5000${product.image}`}/></td>
              <td>
              <Link className="custom-button1" to={`/admin/products/edit/${product._id}`}>
                  Modifier
                </Link>
                <button className="custom-button2" onClick={() => deleteProduct(product._id)}>
                  Supprimer
                </button>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to={"/admin/products/new"} className="custom-button">Nouveau produit</Link>
    </>
  );
}
