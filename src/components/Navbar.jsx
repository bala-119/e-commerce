import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CardContext";
import "./Navbar.css";

function Navbar() {
  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar">
      <h2>🌿 Green Store</h2>

      <div className="nav-links">
        <Link to="/" className="link">Fruits</Link>
        <Link to="/vegetables" className="link">Vegetables</Link>
        <Link to="/dairy" className="link">Dairy</Link>
        <Link to="/cart" className="link">
          Cart 🛒 ({totalItems})
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;