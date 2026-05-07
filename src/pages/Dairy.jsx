// src/pages/Dairy.jsx

import { loadProducts } from "../utils/loadProducts";
import ProductCard from "../components/ProductCard";

const dairy = loadProducts("dairy", 100);

function Dairy() {
  return (
    <div>
      <h2>Dairy</h2>
      <div style={{ display: "flex", gap: 20 }}>
        {dairy.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}

export default Dairy;