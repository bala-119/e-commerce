// src/pages/Vegitables.jsx

import { loadProducts } from "../utils/loadProducts";
import ProductCard from "../components/ProductCard";
import "./Fruits.css"

const vegetables = loadProducts("vegetables", 100);

function Vegetables() {
  return (
    <div className="container">
      <h2 className="title">Vegetables</h2>
      <div className="grid">
        {vegetables.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}

export default Vegetables;