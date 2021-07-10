import axios from "axios"
import { useEffect, useState } from "react"

import '../styles/bookcard.css'

export function BookCard(props) {
  const [image,setImage] = useState()
  useEffect( () => {
    if( !image ) {
      axios.get('/book_covers/'+ props.image)
      .then( (response) => {
        setImage( response.data )
      })
    }
  })
  return (
    <div className="col-md-4 my-2 d-flex flex-column book-card">
        <div className="card" style={{flex:1}}>
        <img src={'/book_covers/'+props.image} className="card-img-top book-image" alt={props.title}/>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <h6 style={(props.tagline) ? {display: 'block'} : {display: 'none'}}>{props.tagline}</h6>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          
        </div>
      </div>
    </div>
  )
}