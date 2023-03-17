import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css';
import { getCartLengthObservable } from '../../services/cart';

export default function Navbar() {

  const [productInCat, setProductInCart] = useState(0);

  useEffect(() => {
    const subscription = getCartLengthObservable().subscribe(length => {
      setProductInCart(length);
    });
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <nav className={styles.navbar}>
      <ul>
      {
       menu.map(el => <li><Link to={el.path}> {el.label} </Link> </li>)
      }
      <li className={styles.cart}><Link to='/cart'>Cart ({productInCat})</Link></li>
      </ul>
    </nav>
  );
}

var menu = [{
  label:'Home',
  path:'/'
},
{
  label:'Productos',
  path:'/products'
},
{
  label:'Contacto',
  path:'/contact'
}]
