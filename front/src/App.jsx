

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Create } from './Components/Create'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Create />} />
        </Routes>

      </BrowserRouter>
    </>

  )
}

export default App
