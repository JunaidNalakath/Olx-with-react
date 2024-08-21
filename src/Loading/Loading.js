import React from "react";
import ReactLoading from 'react-loading'
import './Loading.css'

function Loading() {
  return (
    <div className="loading"  >
      <ReactLoading type="spin" color="#002f34"  height={100} width={60}/>
      <span style={{display:'flex'}} >Loading    <ReactLoading type="bubbles" color="#002f34"  height={40} width={30}/> </span>
    </div>
  )
}

export default Loading
