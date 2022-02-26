import React ,{useContext} from 'react'
import { ColeurCnxt } from '../contexts/ColeurCxt';

const Coleur = () => {
   const {color,updateColor} = useContext(ColeurCnxt)
    return (
       <div>
          <h1>{color}</h1>
       <button onClick={updateColor}>update</button>
       </div>
    )
}
export default Coleur ;