import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Job from './Job'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>

    <Route path='/' element={<Job/>} />



    </Routes>
    </BrowserRouter>
    
    
    
    
    </>
  )
}

export default App