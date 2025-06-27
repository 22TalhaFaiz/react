import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Counter from './Counter';
import Form from './Form';
import Array from './Array';
import Login from './Login';
import { Fr } from './Fr';

function App() {
  return (
    <div className="App">

     <BrowserRouter>

    <Routes>
    <Route path='/' element={<Counter/>} />
    <Route path='/f' element={<Form/>} />
    <Route path='/arr' element={<Array/>} />
    <Route path='/l' element={<Login/>}/>
    <Route path='/fr' element={<Fr/>} />


    </Routes>
     
      </BrowserRouter> 
    </div>
  );
}

export default App;
