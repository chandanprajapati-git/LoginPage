import { useState } from 'react'
import Signup from './LoginSignup/Signup'
import backgroundimage from './assets/pxfuel.jpg';
import{Routes,Route,BrowserRouter} from 'react-router-dom';
import Login from './LoginSignup/Login'
import Home from './LoginSignup/Home'
import Content from './video/Content'
function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/Signup' element={<Signup/>}></Route>
      <Route path='/Home' element={<Home/>}></Route>
      <Route path='/Content' element={<Content/>}>/</Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App; 