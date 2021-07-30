import { useState, useEffect } from "react"
import { useParams } from "react-router"
import { Spinner } from './Spinner'

export function Detail(props) {
  const [book, setBook] = useState()
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
    return (
      <div className="detail">
        <p>{book.title}</p>
      </div>
    )
  }
  else {
    return null
  }
}