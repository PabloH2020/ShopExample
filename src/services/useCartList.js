import { useContext, useEffect} from 'react';
import { CartContext } from '../context/CartContext';



export const useCartList = ()=>{
    const {cartData,addToCart,removeFromCart,clearCart }= useContext(CartContext)

  useEffect(()=>{
    window.localStorage.setItem('cartItems',JSON.stringify(cartData))
    console.log(cartData)
  },[cartData])

  

  return {cartData,addToCart,removeFromCart,clearCart}
}