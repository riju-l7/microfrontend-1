import React, {useContext, createContext, useState} from 'react'


export const Context = createContext({});
const ProviderComponent  = (props)=>{

    const [contextData, setContextData] = useState({customerId:2})

    console.log("contextData----", contextData);
    return (
        <Context.Provider value={[contextData,setContextData]} >
            {props.children}
        </Context.Provider>
    )
}

export default ProviderComponent;