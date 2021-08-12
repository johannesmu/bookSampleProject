import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Spinner } from "./Spinner";

export function Home ( props ) {
  const [ data, setData ] = useState()
 
  useEffect( () => {
    setData( props.data )
  }, [props.data] )
  

  if( !data ) {
    return(
      <Spinner size={64} />
    )
  }
  else {
    const Books = data.map( (item, key) => {
      return(
        <div className="col-sm-6 col-lg-3 my-2" key={key}>
          <div className="card position-relative" style={{minHeight:'100%'}}>
            <Link 
            className="position-absolute" 
            to={"book/" + item.id } 
            style={{top:0,bottom:0,left:0,right:0}}/>
            <img 
            src={item.cover_image} 
            className="card-img-top border border-primary" 
            alt={item.title} 
            style={{maxWidth: '100%', aspectRatio:'3/4', objectFit: 'cover', objectPosition: 'center'}}
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{item.title}</h5>
              <p className="flex-fill" style={{minHeight: '5ch'}}>{item.tagline}</p>
              <p>by {item.author}</p>
            </div>
          </div>
        </div>
      )
    })
    return(
      <div className="home">
        <h2>Books</h2>
        <div className="row align-items-stretch">
        { Books }
        </div>
      </div>
    )
  }
  
}