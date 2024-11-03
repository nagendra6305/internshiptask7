import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import './signup.css';


const Signup = () => {
  const Navigate = useNavigate()
    const[data,setdata]=useState("")
    const[firstname,setfirstname]=useState("")
    const[lastname,setlastname]=useState("")
    const[email,setemail]=useState("")
    const[password,setpassword]=useState("")
    console.log({data})
function handleLocalstr(){
    let object={
firstname:firstname,
lastname:lastname,
email:email,
password:password
    }
    localStorage.setItem("signup",JSON.stringify(object))
    const setitem = JSON.parse(localStorage.getItem("signup"))
    setdata(setitem)
Navigate("/Loginpage")

}


  return (
    <body className='body1'>
      <div class="container">
          <div className="login-box">
        <h2>REGISTER</h2>
        <form action="#">
            <div className="input-box">
            <input placeholder='firstname' onChange={(e)=>setfirstname(e.target.value)}/>

               
            </div>
            <div className="input-box">
            <input placeholder='lastname' onChange={(e)=>setlastname(e.target.value)}/>
              
            </div>
            <div className="input-box">
            <input placeholder='Email' type='email' required onChange={(e)=>setemail(e.target.value)}/>
              
            </div>
            
            

            
            <div className="input-box ">
            <input placeholder='Password' type='password' onChange={(e)=>setpassword(e.target.value)}/>

                
            </div>
            
            
        
            <button style={{color:"white"}} className="btn" onClick={()=>handleLocalstr()}>Register</button>
        
        </form>
    </div>
       
    </div>
    </body>
  )
}

export default Signup