// App.jsx

import { Routes, Route } from "react-router-dom";
import Fruits from "./pages/Fruits";
import Vegetables from "./pages/Vegitables";
import Dairy from "./pages/Dairy";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import { CartProvider } from "./context/CardContext";

function App() {
  return (
    <CartProvider>
      <Navbar />   {/* ✅ here */}
      
      <Routes>
        <Route path="/" element={<Fruits />} />
        <Route path="/vegetables" element={<Vegetables />} />
        <Route path="/dairy" element={<Dairy />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </CartProvider>
  );
}

export default App;