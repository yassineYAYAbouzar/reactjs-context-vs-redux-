import React, {createContext, useState} from 'react'

export const ProductCxt = createContext()

const ProductProvider = (props) =>{
    const [produit , setProduit] = useState("iphone")
    const value={
        produit
    }
   return( <ProductCxt.Provider value={value}>
        {props.children}
    </ProductCxt.Provider>)
}

export default ProductProvider

