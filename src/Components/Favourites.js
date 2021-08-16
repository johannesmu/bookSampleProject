import { useState,useEffect } from "react"
import {Spinner} from './Spinner'
export function Favourites( props ) {
  const [favourites,setFavourites] = useState()

  useEffect( () => {
    if( !favourites && props.user ) {
      props.get( props.user.uid )
      .then( (items) => setFavourites(items) )
      .catch( (error) => console.log(error) )
    }
  })

  if( !favourites ) {
    return <Spinner size={48} />
  }
  else {
    const Favs = favourites.map( (item) => {
      return( <p>{item.title}</p> )
    })
    return (
      <div className="favourites">
        {Favs}
      </div>
    )
  }
}