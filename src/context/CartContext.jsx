import { createContext ,useReducer} from "react";
import {products as mockProducts} from '../mock/products.json'

const cartStorageValue = window.localStorage.getItem('cartItems');
const cartVal = cartStorageValue ? JSON.parse(cartStorageValue) : [];

function cartReducer(state,action){
    const {type,payload} = action;
  
    switch (type) {
      case 'ADD_TO_CART':{
        const productInCartIndex = state.findIndex(el => el.id === payload.id);
        console.log(productInCartIndex)
        if(productInCartIndex>=0){
            let newState = structuredClone(state);
            newState[productInCartIndex].quantity +=1;
            return newState
        }else{
            const productInCartIndexAllProducts = mockProducts.findIndex(el => el.id === payload.id)
            let newState = structuredClone(state);
            newState = [...newState,{...mockProducts[productInCartIndexAllProducts],quantity:1}]
            return newState;
            
        }      
      }
      case 'REMOVE_FROM_CART':{
          const productInCartIndex = state.findIndex(el => el.id === payload.id);
        if(productInCartIndex>=0){
          let newState = structuredClone(state);
          if(newState[productInCartIndex].quantity == 1){
            newState = newState.filter(el=>el.id != payload.id)
          }else{
            newState[productInCartIndex].quantity -=1;
          }
          
          return newState;
        }
        break;
      }
      case 'CLEAR_CART':{
        return cartVal;
      }
      
        
    }
    return state;
  }


export const CartContext = createContext()

// eslint-disable-next-line react/prop-types
export const CartProvider = ({children})=>{
    
    // const [cartList,setCartList]=useState(cartVal);
    const [state,dispatch] = useReducer(cartReducer,cartVal);

    const addToCart = (prodId)=>dispatch({
        type:'ADD_TO_CART',
        payload:{
            id:prodId
        }
    })

    const removeFromCart = (prodId)=>dispatch({
        type:'REMOVE_FROM_CART',
        payload:{
            id:prodId
        }
    })

    const clearCart = ()=>dispatch({
        type:'CLEAR_CART'
    })


    return(
        <CartContext.Provider value={{cartData:state,addToCart,removeFromCart,clearCart}}>
            {children}
        </CartContext.Provider>    
    )
}