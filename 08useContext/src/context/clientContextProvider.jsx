import React,{useState} from "react";
import ClientContext from "./clientContext";

const ClientContextProvider = ({children})=>{
    const [client,setClient] = useState(null)
return(
    <ClientContext.Provider value = {{client,setClient}} >
    {children}
    </ClientContext.Provider>
)
}
export default ClientContextProvider