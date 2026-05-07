import { loadProducts } from "../utils/loadProducts";
import ProductCard from "../components/ProductCard";
import "./Fruits.css";

const fruits = loadProducts("fruits", 100);

function Fruits() {
  return (
    <div className="container">
      <h2 className="title">Fruits</h2>

      <div className="grid">
        {fruits.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}

export default Fruits;