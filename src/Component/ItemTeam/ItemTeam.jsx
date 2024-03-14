import React from 'react'
import './ItemTeam.css'

const ItemTeam = (props) => {
  return (
    <div className="container">
      <div className="card">
      <img src={props.image} alt="" />
        <h3>{props.name}</h3>
        <p>{props.content}</p>
        <a href="#" className="btn">
        <i class="fa-brands fa-linkedin"></i></a>
      </div>
    </div>
  )
}

export default ItemTeam
