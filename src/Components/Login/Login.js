import React from 'react'
import './Login.css'
import Logo from '../../olx-logo.png'
import { useState } from 'react'
import {auth} from '../../Firebase/config'
import { useNavigate } from 'react-router-dom'
import Loading from '../../Loading/Loading'

function Login() {
  const navigate=useNavigate()
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [error,setError]=useState('')
  const [load,setLoad]=useState(false)

  const loginSubmit=(e)=>{
        setLoad(true)
        e.preventDefault()
        auth.signInWithEmailAndPassword(email,password).then(()=>{
          navigate('/')
          setLoad(false)
        }).catch((err)=>{
          setLoad(false)
         const errmsg='Invalid Username or Password'
          setError(errmsg)
        })
  }

  return (
    <div>
      {load?<Loading/>:
       <div>
      <div className="loginParentDiv">
        <img  width="220px" height="200px" src={Logo}></img>
        <form onSubmit={loginSubmit} >
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            onChange={(e)=>setPassword(e.target.value)}
            id="lname"
            name="password"
          />
          <br />
          {error?<p className='loginerr' >{error}</p>:''}
          
          <br />
          <button>Login</button>
        </form>
        <br></br>
        <button onClick={()=> navigate('/signup')} >Create A new Account</button>
      </div>
    </div>
}
    </div>
  )
}

export default Login
