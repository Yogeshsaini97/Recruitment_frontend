import React from 'react'
import Rocket from "./Rocket.gif"



const Loading = () => {
  return (
    <div className="d-flex justify-content-center">
    <img src={Rocket} className="img-fluid" alt="loading"></img>
  </div>
  )
}

export default Loading
