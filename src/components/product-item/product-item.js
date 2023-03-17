import React from 'react';
import styles from './product-item.module.css';
import { useNavigate } from 'react-router-dom';
import Badge from '../badge/badge';

export default function ProductItem({ product }) {
  const { id, title, description, price, thumbnail, stock, category } = product;

  const viewProduct = useNavigate();
  const redirect = () => {
    viewProduct('/product/'+product.id)
  }

  return (
    <div className={styles.product_card}>
      <div className={styles.product_image}>
        <img src={thumbnail} alt={title} />
        <div className={styles.badges}>
          <Badge bg="primary">${price}</Badge>
          <Badge bg="success">{category}</Badge>
        </div>
      </div>
      <div className={styles.product_info}>
        <h2>{title}</h2>
        <p>{description}</p>
        <button disabled={!product.stock} onClick={()=>redirect()}>View product</button>
      </div>
    </div>
  );
}