import {products as mockProducts} from '../mock/products.json'

export  function useFilter(valueFilter){
  
    const myFilteredProducts =  mockProducts.filter(product=>{
      if( product.price>= valueFilter.minValue && (product.category == valueFilter.category || valueFilter.category == 'All') ){
        return product;
      }

    })
    return {products:myFilteredProducts}
    
  
  }