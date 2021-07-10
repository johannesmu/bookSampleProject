import { useState, useEffect } from "react";
import { Spinner } from './Spinner'
import { BookCard } from "./BookCard";

export function Home ( props ) {
  const [ data, setData ] = useState()

  useEffect( () => {
    if( !data ) {
      setData( props.data )
    }
  })

  if( !data ) {
    return(
      <div className="home" style={{display:'grid',placeItems:'center',minHeight:'100%'}}>
        <Spinner width={36} />
      </div>
    )
  }
  else {
    console.log( data )
    const Books = data.books.map( (item) => {
      return(
        <BookCard 
        title={item.book_title} 
        image={item.cover_image}
        tagline={item.tagline}
        />
        
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