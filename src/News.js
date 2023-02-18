import React,{useState,useEffect} from 'react'
import Loading from "./Components/Loading"


const News = () => {

  const [articles,setArticles]=useState([])
  const [loading,setLoading]=useState(true)

  useEffect(() => {

    Getdata();
    setLoading(true);
  
   
  }, [])


  const Getdata= async ()=>
  {
 
      //   console.log("inside" + params._id );
      const response = await fetch(
        `http://localhost:5000/addcompany`,
        {
          method: "GET", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, *cors, same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          // credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            //   'Content-Type': 'application/json',
            // Authorization: process.env.REACT_APP_5000_BEARER_TOKEN,

            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: "follow", // manual, *follow, error
          referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          // body: JSON.stringify(data) // body data type must match "Content-Type" header
        }
      );
      console.log("inside useeffeee of formid");
      const data = await response.json();
      console.log(data);
      setArticles(data);
  }





  function formatDate(string) {
    var options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(string).toLocaleDateString([], options);
  }


  const showdate=()=>
  {
    // Create a new Date object
const today = new Date();

// Get the day of the month
const date = today.getDate();

// Create a function to add a suffix to the day of the month (e.g. "2nd", "3rd", etc.)
function getDaySuffix(day) {
  if (day >= 11 && day <= 13) {
    return "th";
  }
  switch (day % 10) {
    case 1: return "st";
    case 2: return "nd";
    case 3: return "rd";
    default: return "th";
  }
}

// Get the day suffix
const daySuffix = getDaySuffix(date);

// Define an array of month names
const monthNames = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"];

// Get the current month name
const monthName = monthNames[today.getMonth()];

// Get the current year
const year = today.getFullYear();

// Combine the parts to form the date string
const dateString = `${date}${daySuffix} ${monthName} ${year}`;

// Display the date string
return dateString;

  }




  return (
    <div className="container my-5">
     <>
   { (loading)?
      <div >
     <div style={{display: "flex",
    justifyContent: "flex-end",fontfamily: "cursive",
    fontWeight: "bolder"}}> {showdate()}</div>
        <h1 className=" my-2">Welcome!!!!</h1>
        <h1 className=" my-3">Here are some of the Jobs pasted by HR Today</h1>
        <div className="row ">
          {articles.reverse().map((element,i) => {
            return (
              <>
              
              <div className="col-md-4 my-5" id={i}>
              <div>
          <div className="card">
            <a href="https://allpunejobs.com/how-to-write-an-email-asking-for-a-job-vacancy/" target="_blank"  rel="noreferrer noopener"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyunySe7_G8vZf3CFvzbRg8vQY-9SIQVXMQA&usqp=CAU" className="card-img-top" alt="..." /></a>
            <div className="card-body">
            <h5 className="card-title">Job Posted on :<div className="rightKey"> {formatDate(element.createdAt)}</div></h5>
              <h5 className="card-title">Company Name : <div className="rightKey">{element.companyName}</div></h5>
              <h5 className="card-title">Company Location : <div className="rightKey">{element.Location.map((data,i)=>
              {
                return <div id={i}>{data}</div>
              })}</div></h5>
              <h5 className="card-title">Profiles :<div className="rightKey"><ol> {element.Profiles.map((data,i)=>
              {
                return <li id={i}><div>{data}</div></li>
              })}</ol></div></h5>
             
              <h5 className="card-title">Working Days : <div className="rightKey">{element.WorkingDays}</div></h5>
              <h5 className="card-title">Experience Required : <div className="rightKey">{element.experienceRequired}</div></h5>
              <h5 className="card-title">CTC Offered: <div className="rightKey">{element.CTC}</div></h5>
              <h5 className="card-title">HR Email Id :<div className="rightKey" style={{color:"red"}}> {element.Hremailid}</div></h5>
             

              Hurry!! Send mail and grab your job today
            
            </div>
          </div>
        </div>
              </div>
          
          </>
            );
          })}
        </div>
        <div className="d-flex justify-content-between">
          {/* <button type="button" disabled={this.state.page<1}  onClick={this.prevfunc} className="btn btn-dark ">
            previous
          </button> */}
          {/* <button type="button" disabled={Math.ceil(this.state.totalresults/9 - 1)<this.state.page}   onClick={this.nextfunc} className="btn btn-dark">
            Next{" "}
          </button> */}
        </div>
      </div>:<Loading/>


        }
        </>
      
    </div>
    
  )
}

export default News
