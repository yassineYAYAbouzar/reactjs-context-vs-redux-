import react , {createContext, useState} from "react";

export const ColeurCnxt = createContext(0);

const ColeurProvieder = (props) =>{
    const [color , setColor] = useState("red")

    const updateColor = () => setColor("green");

    const value ={
        color,updateColor
    }
    return(
        <ColeurCnxt.Provider value={value}>
            {props.children}
        </ColeurCnxt.Provider>
    )
}

export default ColeurProvieder;