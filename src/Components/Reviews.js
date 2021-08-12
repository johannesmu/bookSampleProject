import { useState,useEffect } from "react";
export function Reviews ( props ) {
  const [reviews,setReviews] = useState()

  useEffect( () => {
    if( !reviews ) {
      setReviews()
    }
  })

  if( reviews ) {
    return(
    <div className="reviews row">

    </div>
  )}
  else {
    return <p>No reviews yet. Be the first to review!</p>
  }
}