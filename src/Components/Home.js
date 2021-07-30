import { useState, useEffect } from "react";
//import axios  from "axios";
export function Home ( props ) {
  const [ data, setData ] = useState()
 
  useEffect( () => {
    setData( props.data )
  }, [props.data] )
  

  if( !data ) {
    return(
      <div className="home">
        <h2>Getting data ...</h2>
      </div>
    )
  }
  else {
    const Books = data.map( (item) => {
      return(
        <div className="col-md-3">
          <div className="card">
            <img 
            src={item.cover_image} 
            className="card-img-top" 
            alt={item.title} 
            style={{width: '100%', height: '300px', objectFit: 'cover', objectPosition: 'center'}}
            />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p style={{minHeight: '10ch'}}>{item.tagline}</p>
            </div>
          </div>
        </div>
      )
    })
    return(
      <div className="home">
        <h2>Books</h2>
        <div className="row">
        { Books }
        </div>
      </div>
    )
  }
  
}