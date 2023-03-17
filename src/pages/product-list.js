import React, { useState, useEffect } from 'react';
import ProductItem from '../components/product-item/product-item';
import Searchbar from './searchbar';
import { getAllProducts, getProductByCategory, getProductByName } from '../services/products';
import '../styles/main.css'; 

export default function ProductList(props) {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then(response => setProducts(response.data.products));
  }, []);

  function onFormChange(e) {    
    const { name, value } = e;
    if(name === 'category'){
      getProductByCategory(value).then(response => setProducts(response.data.products));
    }
    else {
      getProductByName(value).then(response => setProducts(response.data.products));
    }
  }

  return (
   <div>
    <Searchbar key="searchbar" onFormChange={onFormChange} />
    <div className="product_container">
      {products ? products.map((product) => (
       <ProductItem key={product.id} product={product} />
      )) : <div>Loading...</div>}
    </div>
   </div>
  );
}

