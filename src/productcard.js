

import React from 'react'

const Productcard = (props) => {
  return (
    <div>  <div className="col">
    <div className="card">
      <img src={props.Thumbnail} className="card-img-top" alt="..." style={{height:"280px"}}/>
      <div className="card-body">
        <h5 className="card-title">{props.Title}</h5>
        <p className="card-text">{props.Description}</p>
        <p >Price: ${props.Price}</p>
        
      </div>
    </div>
  </div></div>
  )
}

export default  Productcard ;