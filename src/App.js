
import './App.css';


import React from 'react'
import Navbar from './Components/Navbar';
import News from './News';
import { BrowserRouter, Routes, Route} from "react-router-dom";



const App = () => {
  return (
    <div>
      <>
      <BrowserRouter>
      <div className='mx-1'>
      <Navbar/>
      <Routes>
        <Route exact path="/"  element={<News/> }/>
        </Routes>
        
        <Routes>
        <Route exact path="/jobsbycompnay"   element={<News/>}/>
        </Routes>
        
      </div>
      </BrowserRouter>
      </>
      
    </div>
  )
}

export default App




