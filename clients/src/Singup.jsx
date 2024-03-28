import React, { useEffect, useState } from 'react';
import "./index.css";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Singup = () => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  // const [mesage, setMesage] = useState()
  const navigate = useNavigate()

  const handleSubmit= (e)=>{
    e.preventDefault()
    axios.post('http://localhost:5000/register',{name,email,password})
    .then(result => {console.log(result)
      navigate('/login')
      window.location.reload()
    })
    .catch(err => console.log(err))
  }

  // const checkValidation = () => {
  //   const rgg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  //   if(rgg.test(email)){
  //     setMesage("valid")
  //   } else if (email === ""){
  //     setMesage("please Enter email")
  //   } else if (!rgg.test(email)){
  //     setMesage("Email is not valid")
  //   }else{
  //     setMesage("")
  //   }
  // }
  // useEffect(()=>{
  //   checkValidation()
  // },[])

  return (
    <div className='total-page2'>
    <div className='total-back'>
    <div className='total-input'>
    <form onSubmit={handleSubmit}>
    <div className='input1'>
    <h4  className='title1'>Create an Account</h4>
      <input className='input-mail' name='name' placeholder='username' onChange={(e)=>setName(e.target.value)}></input>
      <input className='input-mail' name='email' placeholder='Enter E-mail Address..' onChange={(e)=>setEmail(e.target.value)}></input>
      
      </div>
      <div className='input2'>
      <input className='input-pass' name='password' placeholder='password' type='password' onChange={(e)=>setPassword(e.target.value)}></input>
      </div>
      <div className='button'>
      <button className='login-button' type='submit' >signup</button>
      </div>
      </form>
      <hr/>
      <div className='bottom-fp'>
      <Link className='bottom-fp1'>Forget password?</Link><br/>
      <Link className='bottom-fp2' to={"/home"}>Already have an account</Link>
      </div>
      
    </div>
    </div>
    </div>
  )
}

export default Singup
// <p style={{color:"red"}}>{mesage}</p>