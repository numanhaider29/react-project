import React,{useContext, useState} from 'react'
import GuestContext from '../context/guestContext'

function GuestLogin() {

    const[guestName, setGuestName] = useState('')
    const[guestPassword, setGuestPassword] = useState('')
    const {setGuest} = useContext(GuestContext)
    const handleClick = (e)=>{
        e.preventDefault()
        setGuest({guestName,guestPassword})
    }
  return (
    <div>
        <input type="text"
        value={guestName}
        onChange={(e)=>setGuestName(e.target.value)}
        placeholder='Guest_Name'/>

        <input type="text"
        value={guestPassword}
        onChange={(e)=>setGuestPassword(e.target.value)}
        placeholder='Guest_Password'/>
        <button onClick={handleClick}>Submit</button>
    </div>
  )
}

export default GuestLogin