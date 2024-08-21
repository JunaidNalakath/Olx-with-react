import React from 'react'

import './Header.css'
import Arrow from '../../Assets/Arrow'
import OlxLogo from '../../Assets/OlxLogo'
import Search from '../../Assets/Search'
import SellButton from '../../Assets/SellButton'
import SellButtonPlus from '../../Assets/SellButtonPlus'
import { useContext } from 'react'
import { AuthContext } from '../../Contexts/Context'
import { auth } from '../../Firebase/config'
import { Link, useNavigate } from 'react-router-dom'

function Header() {
  const navigate=useNavigate()
  const {user}=useContext(AuthContext)
  const logout=()=>{
    auth.signOut().then(()=>{
     navigate('/login')
    })
  }
  return (
    <div className="headerParentDiv">
    <div className="headerChildDiv">
      <div className="brandName">
        <Link to={'/'} > <OlxLogo></OlxLogo></Link>
      </div>
      <div className="placeSearch">
        <Search></Search>
        <input type="text" />
        <Arrow></Arrow>
      </div>
      <div className="productSearch">
        <div className="input">
          <input
            type="text"
            placeholder="Find car,mobile phone and more..."
          />
        </div>
        <div className="searchAction">
          <Search color="#ffffff"></Search>
        </div>
      </div>
      <div className="language">
        <span> ENGLISH </span>
        <Arrow></Arrow>
      </div>
      <div className="loginPage">
        <span>{user ? user.displayName :<p onClick={()=>navigate('/login')} >Login <hr/> </p>}</span>
        
      </div>
      <div className='loginPage' >
         <span onClick={logout} >{user && 'Logout'}</span>
         <hr></hr>
      </div>
      <div className="sellMenu">
        <SellButton></SellButton>
        <div className="sellMenuContent">
          <SellButtonPlus></SellButtonPlus>
          <Link to={'/create'} > <span>SELL</span></Link>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Header
