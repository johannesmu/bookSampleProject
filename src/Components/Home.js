import { useState, useEffect } from "react";
//import axios  from "axios";
export function Home ( props ) {
  const [ data, setData ] = useState()

  useEffect( () => {
    if( !data ) {
      // axios.get(dataURL).then(
      //   (response) => {
      //     setData( response.data )
      //   }
      // )
      fetch( dataURL )
      .then((response) => response.json())
      .then((responseData) => setData(responseData) )
      .catch((error) => console.log(error))
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