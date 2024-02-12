/* eslint-disable react/prop-types */
import { useFilter } from '../services/applyFilter'
import { IconCartAdd } from '../icons/shopIcons'
import { useCartList } from '../services/useCartList'
// import { useContext } from 'react'
// import { CartContext } from '../context/CartContext'

export const GetProducts = ({filterValue})=>{

  const {products}=useFilter(filterValue) 
  const {addToCart} = useCartList()
  // const cartData = useContext(CartContext)

    return (
        products && 
            <ul className="products-list">
              {products.map(prod=>(
                <li key={prod.id}>
                  <h3>{prod.title}</h3>
                  <button onClick={()=>addToCart(prod.id)}>
                    <IconCartAdd/> 
                  </button>                                    
                                                                              
                  <p>${prod.price}</p>
                  <img src={prod.thumbnail} alt={prod.description} />                  
                </li>
      ))}
            </ul>
    )
}