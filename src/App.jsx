
// import { Filters } from "./components/Filters"
import { FiltersContext } from "./components/Filters";
import { GetProducts } from "../src/components/GetProducts"
import { useContext } from "react";
import { FiltersHeader } from "./components/FiltersHeader";
import { Cart } from "./components/ShopCart";
import { CartProvider } from "./context/CartContext";

function App() {  
  
  const filters = useContext(FiltersContext);


  return (
    <> 
        <h1>Shopping Cart App</h1>        
        <FiltersHeader/>
        <CartProvider>  
          <Cart/>
          <GetProducts filterValue={filters.filterValue}/>
        </CartProvider>            
    </>
  )
}

export default App
