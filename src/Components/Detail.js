import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router";
import {Spinner} from './Spinner'
import {Reviews} from './Reviews'

export function Detail(props) {
  const [book, setBook] = useState()
  const [favourites,setFavourites] = useState()
  const [showReview, setShowReview] = useState(false)
  const [bookReviews,setBookReviews] = useState()
  // disable review button if user has reviewed the book
  const [disableReview, setDisableReview] = useState( false )
  // disable favourite button if user has added the book
  const [disableFavs,setDisableFavs] = useState(false)


  const { bookId } = useParams()
  const history = useHistory()
  

  useEffect(() => {
    if (!book) {
      props.handler(bookId)
        .then((bookData) => setBook(bookData))
        .catch((error) => console.log(error))
    }
    if( !bookReviews ) {
      getReviews()
    }
    // get favourites here
  })

  useEffect( () => {
    if( bookReviews && props.user ) {
      bookReviews.forEach( (review) => {
        if( review.userId == props.user.uid ) {
          setDisableReview( true )
        }
      })
    }
    // check if user has this book in favourites, disable fav button if yes
  }, [bookReviews])

  const getReviews = () => {
    props.getReviews( bookId )
      .then( (result) => {
        console.log( ...result )
        setBookReviews( result )
      })
      .catch( (error) => console.log(error) )
  }

  const addReview = () => {
    if( props.auth === true ) {
      setShowReview( true )
    }
    else {
      // if user is not logged in take them to login page and set this page as a return path,
      // so user can be taken back here after login/ register
      history.push(`/login?returnPath=book/${bookId}&msg=${escape("Log in to review "+book.title)}`)
    }
  }

  const handleReview = ( event ) => {
    event.preventDefault()
    const data = new FormData( event.target )
    let review = {}
    data.forEach( (value,key) => review[key] = value )
    props.reviewHandler( review )
      .then( () => {
        setDisableReview(true)
        setShowReview(false)
        getReviews()
      } )
      .catch( error => console.log(error) )
  }

  const addToFavourites = () => {
    if( props.auth === true ) {
      props.favourites(bookId,book.title, props.user.uid)
      .then( (result) => {
        console.log(result)
      })
      .catch( (error) => console.log(error) )
    }
    else {
      // if user is not logged in take them to login page and set this page as a return path,
      // so user can be taken back here after login/ register
      history.push(`/login?returnPath=book/${bookId}&msg=${escape("Log in to add "+book.title+" to favourites")}`)
    }
  }

  if (!book) {
    return <Spinner size={64}/>
  }
  else {
    return (
      <div className="row mt-4">
        <div className="col-md-6">
          <img className="img-fluid" src={book.cover_image} alt={book.title + " cover"}/>
        </div>
        <div className="col-md-6">
          <h3>{book.title}</h3>
          <h4>By {book.author}</h4>
          <p>{book.pages} pages</p>
          <p>ISBN {book.isbn13} {book.isbn10}</p>
          <p>Published by {book.publisher}</p>
          <p>Year {book.year}</p>
          <div className="d-flex">
            <button 
              type="button" 
              className="btn btn-primary"
              onClick={addReview}
              disabled={ (disableReview) ? true : false }
              >
                Review book
            </button>
            <button 
              type="button" 
              className="btn btn-primary ms-2"
              onClick={addToFavourites}
              >
                Add to Favourites
            </button>
          </div>
          <div className="mt-4" style={{display: (showReview === true) ? "block" : "none"}}>
            <h5>Review {book.title}</h5>
            <form id="review" onSubmit={handleReview}>
              <label htmlFor="stars">Stars</label>
              <select className="form-select" name="stars" id="stars" defaultValue="5">
                <option value="1">1 star</option>
                <option value="2">2 stars</option>
                <option value="3">3 stars</option>
                <option value="4">4 stars</option>
                <option value="5">5 stars</option>
              </select>
              <label>Say something about the book (no spoilers!)</label>
              <textarea name="comment" cols="30" rows="3" className="form-control" placeholder="I love this book, because it makes me think of cheese..."></textarea>
              <input type="hidden" name="bookId" value={bookId} />
              <input type="hidden" name="userId" value={(props.user) ? props.user.uid: ""} />
              <input type="hidden" name="userName" value={(props.user) ? props.user.displayName : ""} />
              <button type="submit" className="btn btn-success mt-2">Save</button>
            </form>
          </div>
          <Reviews items={bookReviews}/>
        </div>
      </div>
    )
  }
}