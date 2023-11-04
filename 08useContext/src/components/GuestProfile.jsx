import React, {useContext} from 'react'
import GuestContext from '../context/guestContext'
function GuestProfile() {
    const {guest} = useContext(GuestContext)
  if(!guest) return <div>Guest not found</div>
  return <div>Hello there Guest {guest.guestName}</div>
}

export default GuestProfile