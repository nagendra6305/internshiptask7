import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const Navigate =useNavigate()
    const[email,setemail]=useState("")
    const[password,setpassword]=useState("")
    function handlelogin(){
  const newvalue =    localStorage.getItem("signup")
  const oldvalue = JSON.parse(newvalue)
  if(oldvalue.email==email && oldvalue.password==password){
   Navigate("/Homepage")
  }else{
   console.log(alert("invalid username"))
  }

    }
  return (
  <body className='body1' >
      <div class="container">
          <div className="login-box">
        <h2>LOGIN</h2>
        <form action="#">
           
            <div className="input-box">
            <input placeholder='login' type='text' onChange={(e)=>setemail(e.target.value)}/>
              
            </div>
            
            

            
            <div className="input-box">
            <input  placeholder='password' type='password' onChange={(e)=>setpassword(e.target.value)}/>

                
            </div>
            
            
        
            <button style={{color:"white"}} className="btn" onClick={()=>handlelogin()}>Login</button>
        
        </form>
    </div>
       
    </div>
    </body> 
   
  )
}

export default Login