import { useState } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";

function App() {
  const [cartCount, setCartCount] = useState(0);

  const products = [
    { id: 1, name: "Phone", price: 40000 },
    { id: 2, name: "Laptop", price: 30000 },
    { id: 3, name: "Tablet", price: 45000 }
  ];

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div>
      <Navbar cartCount={cartCount} />

      <h1>Products</h1>

      <div className="products">
        {products.map((item) => (
          <ProductCard
            key={item.id}
            item={item}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default App;