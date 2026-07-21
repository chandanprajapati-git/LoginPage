import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Signup from './LoginSignup/Signup'
import backgroundimage from './assets/pxfuel.jpg';
import{Routes,Route,BrowserRouter} from 'react-router-dom';
import Login from './LoginSignup/Login'
import Home from './LoginSignup/Home'
function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signup/>}></Route>
      <Route path='/Login' element={<Login/>}></Route>
      <Route path='/Home' element={<Home/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App; 