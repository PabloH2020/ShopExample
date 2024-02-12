import { useContext } from "react";
import { FiltersContext } from "../components/Filters";

export const useCategories = (products)=>{

    const filters = useContext(FiltersContext);

    const categories = products.map(el=>{
        return el.category;
    });
    const filteredCategories = categories.filter((el,index)=>{
        return categories.indexOf(el) === index;
    })
    console.log(filteredCategories)
  
    const handlePrice = (event)=>{
        filters.setFilterValue({...filters.filterValue,"minValue":event.target.value})
    }
    const handleCategory = (event)=>{
        filters.setFilterValue({...filters.filterValue,"category":event.target.value})
    }

    return {handleCategory,handlePrice,filteredCategories}
}