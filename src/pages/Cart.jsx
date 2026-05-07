// src/pages/Cart.jsx

import { useContext } from "react";
import { CartContext } from "../context/CardContext";
import "./Cart.css";
import { useNavigate } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react";

function Cart() {
  const { cart, getTotal } = useContext(CartContext);
  const navigate = useNavigate();

  const qrData ="esta chica es hermosa"
    // cart
    //   .map(
    //     (item) =>
    //       `${item.name} x ${item.quantity} = ₹${item.price * item.quantity}`
    //   )
    //   .join("\n") + `\nTotal: ₹${getTotal()}`;


  return (
    <div className="cart-container">
      <h2 className="cart-title">Cart</h2>

      {cart.map((item) => (
        <div className="cart-item" key={item.id}>
          {item.name} - ₹{item.price} x {item.quantity}
        </div>
      ))}

      <h3 className="cart-total">Total: ₹{getTotal()}</h3>

      {/* ✅ QR Code */}
      <div style={{ marginTop: "20px" }}>
        <h3>Scan Cart</h3>
        <QRCodeCanvas value={qrData} size={180} />
      </div>

      <button
        className="order-btn"
        onClick={() => {
          alert("Order Placed. Thank You for Ordering");
          navigate("/");
        }}
      >
        Place Order
      </button>
    </div>
  );
}

export default Cart;