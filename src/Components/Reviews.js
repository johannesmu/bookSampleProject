import { useState, useEffect } from "react";
import { Stars } from './Stars'
export function Reviews(props) {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    setReviews(props.items)
  }, [props.items])



  if (reviews) {
    console.log(reviews)
    const ReviewItems = reviews.map((item, key) => {
      return (
        <div className="review card my-2" key={key}>
          <div className="card-body">
            <h6 className="card-title">{item.comment}</h6>
            <Stars number={item.stars} />
          </div>
        </div>
      )
    })
    return (
      <div className="reviews mt-4">
        <h5>Reviews ({reviews.length})</h5>
        {ReviewItems}
      </div>
    )
  }
  else {
    return (
      <div className="reviews mt-4">
        <h5>Reviews (0)</h5>
        <p>No reviews yet. Be the first to review this book!</p>
      </div>
    )
  }
}