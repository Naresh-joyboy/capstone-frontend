import './index.css'
import {BrowserRouter, Route , Routes, useLocation} from 'react-router-dom'
import Singup from './Singup';
import Login from './Login';
import Userform from './pages/Useform';
import Recquery from './pages/Recquery'; 
import Home from './pages/Home';
import Navbar from './pages/Navbar'
import Dashboard from './pages/Dashboard';
import './assets/sb-admin-2.min.css'
import { useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [spechange , setSpeChange] = useState('')
  const [loc , setLoc] = useState('')

  // const location =useLocation
  

  const specificdata =(e)=> {
    const detail =e
    setSpeChange(detail)
  }
 
  
   const login = window.localStorage.getItem("isLogedIn");
  const googlelogin = window.localStorage.getItem("loginSuccess");
 
// useEffect(() => {
//   const handleLocationChange = () => {
//     setLoc(window.location.pathname);
//   };

//   handleLocationChange();
//   window.addEventListener('popstate', handleLocationChange);
  
// }, []);

  return (
    <div>
    <BrowserRouter>
  <Navbar/>

    <Routes>
    <Route path="/register" element={<Singup/>}/>
    <Route path="/login" element={ <Login/>}/>
    <Route path="/useform" element={<Userform spechange={spechange}/>}/>
    <Route path="/recquery" element={ <Recquery/>}/>
    <Route path="/" element={<Dashboard/>}/>
    <Route path="/home" element={<Home specificdata={specificdata}/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
  // {loc !== "/register" && loc !== "/home" && <Navbar />}