import React,{useContext} from 'react'
import ClientContext from '../context/clientContext'
function ClientProfile() {
  const {client} = useContext(ClientContext)
 if(!client) return <div>Client not available</div>
 return <div>Welcome {client.clientName} your password is {client.clientPassword}</div>
}

export default ClientProfile