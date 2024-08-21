import './App.css';

import Home from './Pages/Home';
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import ViewPost from './Pages/ViewPost';
import Create from './Pages/Create'
import {Routes,Route} from 'react-router-dom'
import { useContext ,useEffect} from 'react';
import { AuthContext } from './Contexts/Context';
import { auth } from './Firebase/config';
// import Post from './Contexts/PostContext'

function App() {
  const{setUser,user}=useContext(AuthContext)
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      setUser(user)
    })
    console.log(user)
  },[])
  return (
   <div>
    {/* <Post> */}
    <Routes>
      <Route  path='/' element={<Home/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/login' element={<Login />} />
      <Route path='/view' element={<ViewPost />} />
      <Route path='/Create' element={<Create />} />
    </Routes>
    {/* </Post> */}
    
   </div>
  );
}

export default App;
