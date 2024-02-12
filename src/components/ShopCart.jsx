// import { useContext } from "react";
import { IconCart,IconCartAdd,IconCartRemove,RemoveAll } from "../icons/shopIcons"
import { useCart } from "../services/useCart";
import { useCartList } from "../services/useCartList";
// import { CartContext } from "../context/CartContext";

export const Cart = ()=>{

    const {showCart,handleCloseCart} = useCart()
    const {cartData,addToCart,removeFromCart,clearCart}= useCartList()
    // const cartData = useContext(CartContext)

    
    return(
        <aside className={showCart ? "shop-cart" : "shop-cart hidden-bottom"}>
            <div className="shop-title">
                <button onClick={handleCloseCart}>
                    <IconCart fillColor={'#fff'}/>
                </button>                
                <h2>My Cart</h2>
            </div>
             <ul className={showCart ? '' : 'hidden'}>
                {cartData && cartData.map(prod=>(
                    <li key={prod.id}>
                        <h3>{prod.title}</h3>
                        <p>${prod.price}</p>
                        <img src={prod.thumbnail} alt={prod.description} />                   
                        <div className="change-quantity">
                            <p>Quantity: {prod.quantity}</p>
                            <button onClick={()=>addToCart(prod.id)}>
                                <IconCartAdd/>
                            </button>  
                            <button onClick={()=>removeFromCart(prod.id)}>
                                <IconCartRemove/>
                            </button>                        
                        </div>                  
                  </li>
                ))}                
            </ul>
            <div className={showCart ? 'cleaning-cart' : 'cleaning-cart hidden'}>
                <p>Clean Cart</p>
                <button onClick={clearCart} >
                    <RemoveAll/>
                </button>               
            </div>
        </aside>
    )
}