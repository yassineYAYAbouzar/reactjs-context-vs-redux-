import react , {createContext, useState} from "react";

export const CounterCnxt = createContext(0);

const CounterProvieder = (props) =>{
    const [counter , setCounter] = useState(1)
    
    const incremante = () => setCounter(counter + 1);
    const value ={
        counter,incremante
    }
    return(
        <CounterCnxt.Provider value={value}>
            {props.children}
        </CounterCnxt.Provider>
    )
}

export default CounterProvieder;