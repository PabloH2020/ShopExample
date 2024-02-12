import { useContext } from "react";
import {products as mockProducts} from '../mock/products.json'
import { FiltersContext } from "./Filters";
import { useCategories } from "../hooks/useCategories";


export const FiltersHeader = ()=>{

    const filters = useContext(FiltersContext);
    const {handleCategory,handlePrice,filteredCategories} = useCategories(mockProducts);
    

    return (
        <section className="filters-header">
                <div>
                        <label htmlFor="price"/>
                        <input id="price" onChange={handlePrice} value={filters.filterValue.minValue} type="range" min={0} max={1000}/>
                        <p>{filters.filterValue.minValue}</p>
                </div>
                <div style={{gap:'15px'}}>
                        <label htmlFor="category" style={{alignSelf:'center'}}>Categories</label>
                        <select onChange={handleCategory} name="category_options" id="category">
                                <option value="All">All</option>
                        {filteredCategories.map((el,index)=>(<option key={index} >{el}</option>))}
                        </select>
                </div>  
        </section>
    )
}