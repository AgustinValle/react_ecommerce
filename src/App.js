import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home";
import Contact from "./pages/contacto";
import Cart from "./pages/cart";
import ProductList from "./pages/product-list"
import Product from "./pages/product"

export default function App(){
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<ProductList />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="contact" element={<Contact />} />
        <Route path="cart" element={<Cart />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
