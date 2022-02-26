import { useState } from 'react'
import Coleur from './components/Coleur'
import Counter from './components/Counter'
import Product from './components/Product'
import ColeurProvieder from './contexts/ColeurCxt'
import ProductProvider from './contexts/ProductCxt'
import CounterProvieder from './contexts/CounterCxt'

function App() {

  return (
    <div className="App">
      <ColeurProvieder>
         <Coleur />
        <CounterProvieder>
           <Counter/>
        </CounterProvieder>
        <ProductProvider>
            <Product />
        </ProductProvider>
        
      </ColeurProvieder>
    
    </div>
  )
}

export default App
