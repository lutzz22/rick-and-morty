import React from 'react'

const CardPersonaje = (props) => {
  return (
    <div className="card" style={{width: "18rem"}}>
        <img src={props.image} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.species}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
  )
}

export default CardPersonaje