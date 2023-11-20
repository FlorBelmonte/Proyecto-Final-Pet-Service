import { createContext, useState } from "react";


export const ProvinciaContext = createContext(null);//crea el contexto

//proveedor del contexto
export default function ProvinciaContextProvider({ children }) {
    
    const [filtraProvincia, setFiltraProvincia] = useState('Todas')
    //paso en el value lo que quiero compartir a los otros componentes
    return(
        <ProvinciaContext.Provider value={{filtraProvincia, setFiltraProvincia}} 
        > 
            {children}
        </ProvinciaContext.Provider>
    )
}
