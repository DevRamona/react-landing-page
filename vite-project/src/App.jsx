import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Clients from "./Components/Clients"
import Data from "./Components/Data"
import ProjectImages from './Components/ProjectImages'
import Projects from "./Components/Projects"
import Features from './Components/Features'
import FeaturesData from './Components/FeaturesData'
import Services from './Components/Services'
import servicesData from './Components/servicesData'
function App() {
  
  
  const client = Data.map((item) => 
   (
    <Clients
    img = {item.img}
    title = {item.title}
    name = {item.Author} />
  ))

  const projectTitle = ProjectImages.map((image) => 
    (
      <Projects
      img = {image.img}/>
    ))

    const featuresInfo = FeaturesData.map(feature => (
      <Features
      img = {feature.img}
      title = {feature.title}
      paragraph = {feature.paragraph}/>
    ))

    const servicesInfo = servicesData.map(service => 
      <Services
      img = {service.img}
      title = {service.title}
      content = {service.content}/>
    )
  return (
    <div>
       <h1 className=" text-3xl">WHAT OUR CLIENTS SAY</h1>
       <div className='grid grid-cols-3 grid-rows-2 gap-3 mt-8'>
       {client}

       </div>
       <h1 className='m-8 text-3xl font-bold'>Gallery</h1>
       <p className='mb-16'>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
       <div className='grid grid-cols-3 grid-rows-3'>
        {projectTitle}


       </div>
       <h1 className='text-3xl font-semibold mt-9'>FEATURES</h1>
       <div className='grid grid-cols-4 gap-10 mt-9 '>
        {featuresInfo}
       </div>

       <div className='bg-blue-500 mt-16 text-white'>
       <h1 className='text-3xl font-bold mb-10'>OUR SERVICES</h1>
       <p className='mb-24'>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
       <div className='grid grid-cols-3 grid-rows-2 gap-8 p-20'>
        {servicesInfo}

       </div>
       
       </div>
      
    </div>
  )
}

export default App
