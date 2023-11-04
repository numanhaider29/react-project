import React,{useState,useContext} from 'react'
import ClientContext from '../context/clientContext'

function ClientLogin() {
    const [clientName, setClientName] = useState('')
    const [clientPassword, setClientPassword] = useState('')

    const {setClient} = useContext(ClientContext)
    const handleSubmit = (e)=>{
        e.preventDefault()
        setClient({clientName,clientPassword})
    }
  return (

    <div>
        <h2>Login</h2>
        <input type="text"
        value={clientName}
        onChange={(e)=>setClientName(e.target.value)}
        placeholder='client_username' />
        <input type="password"
        value={clientPassword}
        onChange={(e)=>setClientPassword(e.target.value)}
        placeholder='client_password' />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default ClientLogin