import React, { useContext } from 'react'
import { CounterCnxt } from '../contexts/CounterCxt';
const Counter = () => {

   const {counter,incremante} = useContext(CounterCnxt)
   return(
      <div>
          <button onClick={incremante}>click</button>
           <h3 >this is counter {counter}</h3>
      </div>
   )
}
export default Counter ;