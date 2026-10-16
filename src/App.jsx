import React from 'react'
import Navbar from './components/Navbar'
import AppRoute from './route/AppRoute' 

const App =()=>{
  return(
    <div className='p-4 h-screen flex flex-col'>
      <Navbar/>
      <AppRoute/>
    </div>
  )
}
  
export default App