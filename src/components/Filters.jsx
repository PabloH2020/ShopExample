/* eslint-disable react/prop-types */
import { useState,createContext } from "react"
export const FiltersContext = createContext();

export const FiltersProvider = ({children})=>{

 const [filterValue, setFilterValue]=useState({
        "minValue":400,
        "category":"All"
 })

 

    return (
        <FiltersContext.Provider value={{filterValue,setFilterValue}}>
            {children}
        </FiltersContext.Provider>
        )
}