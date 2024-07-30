import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Clients from "./Components/Clients"
import Data from "./Components/Data"
function App() {
  
  
  const client = Data.map((item) => 
   (
    <Clients
    img = {item.img}
    title = {item.title}
    name = {item.Author} />
  ))

  return (
    <div>
       <h1 className=" text-3xl">WHAT OUR CLIENTS SAY</h1>
       <div className='grid grid-cols-3 grid-rows-2 gap-3 mt-8'>
       {client}

       </div>
      
    </div>
  )
}

export default App
