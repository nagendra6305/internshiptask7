
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Productcard from './productcard';
import { useNavigate } from 'react-router-dom';

const Mainpage = () => {
  const Navigate = useNavigate()
    const[productdata,setProductdata]= useState({
        Products : []
      })
      const[productname,setproductname]=useState("")
      const[filterdata,setFilterdata] = useState([])
      console.log(filterdata)
    
    
     
    
    
      
      useEffect(()=>{
        axios.get("https://dummyjson.com/products").then((res)=>{
          setProductdata({Products:res.data.products})
        })
      },[])
    
      useEffect(()=>{
        let filtertitle =productdata.Products.filter((item,index)=>{
      if(item.title.toLowerCase().includes(productname.toLowerCase()) == true){
        return(true)
      }
     
      })
      setFilterdata(filtertitle)
      },[productname])
      const handlelogout=()=>{
Navigate("/")
      }
  return (
    <div className='mainpage' >
        <h1 style={{backgroundColor:"#0ef",width:"100%" }}>Products</h1>
     <input placeholder='search' size={30}
     value={productname} onChange={(e)=>{
     setproductname(e.target.value)
     }}/>
     <div id='productcontainer' className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3  row-cols-xl-4 g-4">
      {filterdata.length>0 ||productname !='' ? filterdata.map((item,index)=>{
        return(
          <Productcard 
          Thumbnail = {item.thumbnail}
          Title = {item.title}
          Description = {item.description.slice(0,70)}
          Price = {item.price}
          />
        )

      }):productdata.Products.map((item,index)=>{
        return(
          <Productcard 
          Thumbnail = {item.thumbnail}
          Title = {item.title}
          Description = {item.description.slice(0,150)}
          Price = {item.price}
          />
        )

      }) }


</div>
<button style={{margin:"50px"}} className='btn' onClick={()=>{handlelogout()}}>Logout</button>
    </div>
  )
}

export default Mainpage