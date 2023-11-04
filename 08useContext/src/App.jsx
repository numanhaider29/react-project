
import './App.css'
import ClientProfile from './components/ClientProfile'
import GuestLogin from './components/GuestLogin'
import GuestProfile from './components/GuestProfile'
import Login from './components/Login'
import Profile from './components/Profile'
import ClientLogin from './components/clientLogin'
import GuestContextProvider from './context/GuestContextProvider'
import ClientContextProvider from './context/clientContextProvider'
import UserContextProvider from './context/userContextProvider'

function App() {
  

  return (
    <>
    {/* <UserContextProvider>
      <h1>React with Numan </h1>
      <Login/>
      <Profile/>
      </UserContextProvider> */}
      {/* <ClientContextProvider>
        <h1>Practice</h1>
        <ClientLogin/>
        <ClientProfile/>
      </ClientContextProvider> */}
      <GuestContextProvider>
        <h1>another Practice</h1>
        <GuestLogin/>
        <GuestProfile/>
      </GuestContextProvider>
    </>
  )
}

export default App
