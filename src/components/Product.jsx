import React,{useContext} from 'react'
import { ProductCxt } from '../contexts/ProductCxt'

const Product =()=> {
  const {produit} = useContext(ProductCxt)
    return(
      <div>Product1 : {produit}</div>
    )
}

export default Product