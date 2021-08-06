import { useState, useEffect } from "react";
import { useParams } from "react-router";

export function Detail(props) {
  const [book, setBook] = useState()

  const { bookId } = useParams()

  useEffect(() => {
    if (!book) {
      console.log(bookId)
      props.handler(bookId)
        .then((bookData) => setBook(bookData))
        .catch((error) => console.log(error))
    }
  })

  if (!book) {
    return <h3>Loading book...</h3>
  }
  else {
    console.log( book )
    return (
      <div className="row mt-4">
        <div className="col-md-6">
          <img className="img-fluid" src={book.cover_image} />
        </div>
        <div className="col-md-6">
          <h3>{book.title}</h3>
          <h4>By {book.author}</h4>
        </div>
      </div>
    )
  }
}