import { useState, useEffect } from "react";
import {Spinner} from './Spinner';
export function Home ( props ) {
  const [ data, setData ] = useState()

  useEffect( () => {
    if( props.data ) {
      setData( props.data )
    }
  }, [props.data ])

  if( !data ) {
    return(
      <div className="home" style={{display:'grid',placeItems:'center',minHeight:'100%'}}>
        <Spinner width={36} text="Getting stuff..." />
      </div>
    )
  }
  else {
    return(
      <div className="home">
        <h2>Books</h2>
        <div className="row">
        
        </div>
      </div>
    )
  }
  
}