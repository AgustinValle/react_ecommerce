
import { Observable } from 'rxjs';

const productInCat = [];

    const cartLength$ = new Observable((subscriber) => {
      const calculateCartLength = () => {
        const cartLength = productInCat.length || 0;
        subscriber.next(cartLength);
      };
      calculateCartLength();
      const intervalId = setInterval(calculateCartLength, 500);
      return () => clearInterval(intervalId);
    });

    export function getCartLengthObservable() {
        return cartLength$;
    }

    const getCart$ = new Observable((subscriber) => {
    const getCart = () => {
      const cart = productInCat || [];
      subscriber.next(cart);
    };
    getCart();
    const intervalId = setInterval(getCart, 500);
    return () => clearInterval(intervalId);
    });  
  
    export function getCartObservable() {
      return getCart$;
    }

    export function getCartLength() {
        return productInCat.length ||0;
    }

    export function addProduct(product) {
    const inx = getProductIndex(product.id);
    if(inx !== -1){
        productInCat[inx].quantity ++ 
    }
    else {
        product.quantity = 1;
        productInCat.push(product);
    }
}

    export function removeProduct(productId) {
        const inx = getProductIndex(productId);
        productInCat.splice(inx,1);
    }

    function getProductIndex(productId) {
        const inx = productInCat.findIndex((product)=>product.id === productId);
        return inx;
    }