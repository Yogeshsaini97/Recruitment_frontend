import React, { Component } from 'react'
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";



const Innernews = (props) => {
  return (
    <>
        <div>
          <div className="card">
            <a href="https://allpunejobs.com/how-to-write-an-email-asking-for-a-job-vacancy/" target="_blank"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyunySe7_G8vZf3CFvzbRg8vQY-9SIQVXMQA&usqp=CAU" className="card-img-top" alt="..." /></a>
            <div className="card-body">
              <h5 className="card-title">Company Name : {props.companyname}</h5>
              {/* <p className="card-text">
                {description}...
              </p> */}
              <h5 className="card-title">Company Location : {props.location}</h5>
              <h5 className="card-title">HR Email Id : {props.Hremailid}</h5>
            
            </div>
          </div>
        </div>
      </>
  )
}

export default Innernews

