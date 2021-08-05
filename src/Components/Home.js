import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {Spinner} from './Spinner';

export function Home ( props ) {
  const [ data, setData ] = useState()
 
  useEffect( () => {
    setData( props.data )
  }, [props.data] )
  

  if( !data ) {
    return(
      <div className="home" style={{display:'grid',placeItems:'center',minHeight:'100%'}}>
        <Spinner width={36} text="Getting stuff..." />
      </div>
    )
  }
  else {
    const Books = data.map( (item, key) => {
      return(
        <div className="col-md-3 my-2" key={key}>
          <div className="card position-relative">
            <img 
            src={item.cover_image} 
            className="card-img-top border border-primary" 
            alt={item.title} 
            style={{width: '100%', height: '300px', objectFit: 'cover', objectPosition: 'center'}}
            />
            <div className="card-body d-flex flex-column" style={{minHeight:'230px'}}>
              <h5 className="card-title">{item.title}</h5>
              <p style={{minHeight: '5ch', flex:1}}>{item.tagline}</p>
              <p>by {item.author}</p>
            </div>
            <Link 
              className="position-absolute" 
              style={{top:0,left:0,bottom:0,right:0}} 
              to={"/book/" + item.id} 
            />
              
          </div>
        </div>
      )
    })
    return(
      <div className="home my-4">
        <h2>Books Review</h2>
        <div className="row">
        { Books }
        </div>
      </div>
    )
  }
  
}