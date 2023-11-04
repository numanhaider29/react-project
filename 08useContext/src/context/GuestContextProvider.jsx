import React, {useState} from "react";
import GuestContext from "./guestContext";


const GuestContextProvider = ({children})=>{
const [guest, setGuest] = useState(null) 
return(
<GuestContext.Provider value={{guest,setGuest}}>
        {children}
</GuestContext.Provider>
)
}
export default GuestContextProvider