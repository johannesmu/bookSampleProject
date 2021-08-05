import { useState, useEffect } from "react"
import { useParams } from "react-router"
import { Spinner } from './Spinner'

export function Detail(props) {
  const [book, setBook] = useState()
  const [auth,setAuth] = useState( props.auth )
  const { bookId } = useParams()

  useEffect(() => {
    if (!book) {
      props.handler(bookId)
        .then((result) => {
          setBook(result)
        })
    }
  })
  if (book) {
    document.title = "Heartbooks | " + book.title
    return (
      <div className="detail row my-4">
        <div className="col-md-6">
          <img className="img-fluid border border-secondary" src={book.cover_image} alt={book.title} />
        </div>
        <div className="col-md-6">
          <h2 className="mt-0">Title</h2>
          <h3>{book.title}</h3>
          <h4>{book.tagline}</h4>
          <h4>Author</h4>
          <p>{book.author}</p>
          <h4>Published by</h4>
          <p>{book.publisher}</p>
          <h4>Publication year</h4>
          <p>{book.year}</p>
          <h4>ISBN</h4>
          <p>{book.isbn13} <br/> {book.isbn10}</p>
          <p>{book.pages} pages</p>
          <div className="my-4 d-flex">
            <button type="button" className="btn btn-primary">Write a review</button>
            <button type="button" className="btn btn-primary ms-2 ms-md-2">Add to favourites</button>
          </div>
        </div>
      </div>
    )
  }
  else {
    return <Spinner width={36} text="Getting book data..." />
  }
}