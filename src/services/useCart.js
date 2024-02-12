import { useState } from "react";

export const useCart = ()=>{
    const [showCart,setShowCart]=useState(true);
    const handleCloseCart = ()=>{
        console.log(showCart)
        setShowCart(!showCart)
    }

    return {showCart,setShowCart,handleCloseCart}
}