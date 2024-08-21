import React from 'react'
import './Signup.css'
import Logo from '../../olx-logo.png'
import { useState } from 'react'
import {db,auth} from '../../Firebase/config'
import { useNavigate } from 'react-router-dom'
import Loading from '../../Loading/Loading'



function Signup() {
    const Navigate= useNavigate()
    const[username,setUsername]=useState('')
    const[email,setEmail]=useState('')
    const[mobile,setMobile]=useState('')
    const[password,setPassword]=useState('')
    const[load,setLoad] = useState(false)
    
    const signupHandle=()=>{
            Navigate('/login')
    }
    const signupSubmit=(e)=>{
        setLoad(true)
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email,password).then((result)=>{
            result.user.updateProfile({displayName:username}).then(()=>{
              db.collection('users').add({
                id:result.user.uid,
                username:username,
                mobile:mobile
              }).then(()=>{
                Navigate('/login')
                setLoad(false)
              })
            })
        })

        
    }
  
return (
  <div>
    {load ? <Loading/>:
      <div className="signupParentDiv">
        <img  width="240px" height="200px" src={Logo} alt='logo'></img>
        <form onSubmit={signupSubmit} >
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            onChange={(e)=>setUsername(e.target.value)}
            type="text"
            id="fname"
            name="name"
            // placeholder='UserName'
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            onChange={(e)=>setEmail(e.target.value)}
            type="email"
            id="fname"
            name="email"
            // placeholder='Email'
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            onChange={(e)=>setMobile(e.target.value)}
            type="tel"
            id="lname"
            name="phone"
            // placeholder='Mobile'
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            onChange={(e)=>setPassword(e.target.value)}
            type="password"
            id="lname"
            name="password"
            // placeholder='Password'
          />
          <br />
          <br />
          <button onClick={()=>{
          }} >Signup</button>
        </form>
        <br></br>
        <a onClick={signupHandle}>Already have an Account ?</a>
      </div>
}
    </div>
  )
}

export default Signup
