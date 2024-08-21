import React, { useEffect ,useContext, useState} from 'react'
import {PostContext} from '../../Contexts/PostContext'

import './View.css'
import { db } from '../../Firebase/config'

function View() {
  const [userDetails,setUserDetails]=useState()
  const{postDetails} = useContext(PostContext)
  const [posts,setPosts]=useState()
  useEffect(()=>{
    if(postDetails){
    localStorage.setItem('postDetails',JSON.stringify(postDetails))}
     const retrieveObject=JSON.parse(localStorage.getItem('postDetails'))
     setPosts(retrieveObject)
     console.log(posts);
    db.collection('users').where('id','==',retrieveObject.userId).get().then((res)=>{
      res.forEach(doc=>{
        setUserDetails(doc.data())
      })
    })
  },[])
  return (
    <>
       {posts && <div className="viewParentDiv">
      <div className="imageShowDiv"> 
        <img
          src={posts.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {posts.price} </p>
          <span>{posts.name}</span>
          <p>{posts.category}</p>
          <span>{posts.createAt}</span>
        </div>
        {userDetails&&<div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.username}</p>
          <p>{userDetails.mobile}</p>
        </div>
        }
      </div>
     </div>}
    </>
  )
}

export default View
