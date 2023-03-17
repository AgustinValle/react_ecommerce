import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {getCartObservable, removeProduct} from '../services/cart'
import '../styles/main.css'; 

export default function Cart(props) {

    const [cartItems, setCartItems] = useState([]);
    const viewProduct = useNavigate();

    useEffect(() => {
      const subscription = getCartObservable().subscribe(items => {
          setCartItems(items);
      });
      return () => {
        subscription.unsubscribe();
      };
    }, []);
    
    const redirectToProduct = (product) => {
        viewProduct('/product/'+product.id)
    }
    
    const remove = (product) => {
        removeProduct(product);
    }
    
  return (
<div>
  <h1> Product in cart:</h1>
  <table className='cart-table'>
    <thead>
      <tr>
        <th>Id</th>
        <th>Image</th>
        <th>Title</th>
        <th>Quantity</th>
        <th>View</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {cartItems.map(product => 
        <tr>
          <td>{product.id}</td>
          <td><img src={product.thumbnail} alt={product.title} /></td>
          <td>{product.title}</td>
          <td>{product.quantity}</td>
          <td><button className="view-product" onClick={()=>redirectToProduct(product)}>View</button></td>
          <td><button className="remove-product" onClick={()=>remove(product)}>Remove</button></td>
        </tr>
      )}
    </tbody>
  </table>
</div>
  );
}
