import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
    <>
      <h1 className='text-3xl bg-green-500 w-full rounded-full'>Learn about redux tool kit</h1>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
