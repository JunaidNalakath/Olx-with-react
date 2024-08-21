import React, { useEffect, useState,useContext} from 'react'
import './Posts.css'
import Heart from '../../Assets/Heart'
import {db} from '../../Firebase/config'
import Loading from '../../Loading/Loading'
import { useNavigate } from 'react-router-dom'
import { PostContext } from '../../Contexts/PostContext'

function Posts() {

  const {setPostDetails}=useContext(PostContext)
  const [posts,setPosts]=useState([])
  const [load,setLoad]= useState(false)
  const navigate=useNavigate()

  useEffect(()=>{
    setLoad(true)
    db.collection('products').get().then((snapShot)=>{
      const allPosts=snapShot.docs.map((product)=>{
        return{
          ...product.data(),
          id:product.id
        }
      })
      setPosts(allPosts)
      setLoad(false)
    })
  },[])

  return (
    <div>
       <div className="postParentDiv">
       
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        {load?<Loading/>:
        <div className="cards">
        {posts.map((products)=>{
          return(

            <div
            onClick={()=>{
              setPostDetails(products)
              navigate('/view')
            }}
            className="card"
            >
          <div className="favorite">
            <Heart></Heart>
          </div>
          <div className="image">
            <img src={products.url} alt="" />
          </div>
          <div className="content">
            <p className="rate">&#x20B9; {products.price}</p>
            <span className="kilometer">{products.category}</span>
            <p className="name"> {products.name}</p>
          </div>
          <div className="date">
            <span>{products.createAt}</span>
          </div>
        
        </div>  

          ) 
          })}
         
        
        </div>
}
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Posts
