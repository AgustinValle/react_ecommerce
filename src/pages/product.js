import React, { useState, useEffect } from 'react';
import {products} from '../utils/product-mock';
import {useParams} from "react-router-dom";
import { getProductById } from '../services/products';
import Badge from '../components/badge/badge';
import '../styles/main.css'; 
import { addProduct } from '../services/cart';

export default function Product({props}) {
  const {id} = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProductById(id).then(response => setProduct(response.data));
  }, []);

  const addToCart = () => {
    addProduct(product);
  }

  return (
   <div>
    <div className="product-details">
  <div className="product-image">
    <img src={product.thumbnail} alt={product.title} />
  </div>
  <div className="product-info">
    <h1>{product.title}</h1>
    <div className="product-rating">
      <span className="rating">{product.rating}</span>
      <span className="star">&#9733;</span>
    </div>
    <p className="product-price">${product.price}</p>
    <p className="product-stock">{product.stock} in stock</p>
    <p className="product-description">{product.description}</p>
    <p className="product-brand">
    <Badge bg="secondary">{product.brand}</Badge>
    </p>
    <p className="product-category">
    <Badge bg="dark">{product.category}</Badge>
    </p>
    <button className="add-to-cart" onClick={()=>addToCart()}>Add to cart</button>
  </div>
  </div>
   </div>
  );
}