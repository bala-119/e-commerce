// src/components/ProductCard.jsx

import React, { useState, useContext } from "react";
import { CartContext } from "../context/CardContext";
import "./ProductCard.css";

function ProductCard({ product }) {
  const [qty, setQty] = useState(1);
  const { addToCart } = useContext(CartContext);

  return (
    <div className="card">
      <img src={product.image} className="image" />
      <h3 className="name">{product.name}</h3>
      <p className="price">₹{product.price}</p>

      <div className="qty">
        <button onClick={() => setQty(Math.max(1, qty - 1))}>-</button>
        <span>{qty}</span>
        <button onClick={() => setQty(qty + 1)}>+</button>
      </div>

      <button className="addBtn" onClick={() => addToCart(product, qty)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;