import React,{useState,useContext} from 'react'
import './Create.css'
import {db, storage} from '../../Firebase/config'
import { AuthContext } from '../../Contexts/Context'
import { useNavigate } from 'react-router-dom'
import Loading from '../../Loading/Loading'


function Create() {
  const navigate=useNavigate()
  const {user}=useContext(AuthContext)
  const [name,setName]=useState('')
  const [category,setCategory]=useState('')
  const [price,setPrice]=useState('')
  const [image,setImage]=useState(null)
  const [load,setLoad]=useState(false)
  const date=new Date()

  const handleSubmit=()=>{
    setLoad(true)
      storage.ref('/images/'+image.name).put(image).then(({ref})=>{
        ref.getDownloadURL().then((url)=>{
          db.collection('products').add({
            name,
            category,
            price,
            url,
            userId:user.uid,
            createAt:date.toDateString()
          })
            navigate('/')
            setLoad(false)
        })
      })
  }
  return (
    <>
    {load?<Loading/>:
    <card>
      <div className="centerDiv">
          <label htmlFor="fname">Name</label>
          <br />
          <input
            className="input"
            onChange={(e)=>setName(e.target.value)}
            type="text"
            id="fname"
            name="Name"
          />
          <br />
          <label htmlFor="fname">Category</label>
          <br />
          <input
            className="input"
            onChange={(e)=>setCategory(e.target.value)}
            type="text"
            id="fname"
            name="category"
          />
          <br />
          <label htmlFor="fname">Price</label>
          <br />
          <input 
           className="input" 
           onChange={(e)=>setPrice(e.target.value)}
           type="number"
           id="fname" 
           name="Price" />
          <br />
        <br />
        <img alt="Posts" width="200px" height="200px" src={image?URL.createObjectURL(image):''}></img>
          <br />
          <input onChange={(e)=>setImage(e.target.files[0])} type="file" />
          <br />
          <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
        
      </div>
    </card>
}
  </>
  )
}

export default Create
