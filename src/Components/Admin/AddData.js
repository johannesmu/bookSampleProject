
import { useState } from 'react'

export function AddData(props) {
  const [ message, setMessage] = useState()

  const submitHandler = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const obj = new Object()
    formData.forEach((value, key) => {
      obj[key] = value
    })
    // check author includes comma
    if( obj.author.includes(',')) {
      const items = obj.author.split(',')
      // remove the spaces at the beginning and end of each name
      const authors = items.map( (author) => {
        return author.trim()
      })
      obj.author = authors
    }
    else {
      const authors = Array( obj.author)
      obj.author = authors
    }
    // upload the image
    // get image object from formdata
    const img = formData.get('cover_image')
    const title = formData.get('title')
    const string = Math.random().toString(36).substr(2, 5)
    const path = `books/${string}${img.name}`
    props.imgHandler(path,img)
    .then( (imgURL) => {
      // res is the url of the image, now we can add it to object
      obj.cover_image = imgURL
      // now we add the obj to the database
      props.handler( obj )
      .then( (response) => setMessage('Book added!'))
      .catch( (error) => console.log(error))
    } )
    .catch( (err) => console.log(err))
  }

  const Message = ( props ) => {
    setTimeout( () => setMessage(null), 3000 )
    return (
      <div className="alert" style={{display: (props.content) ? "block" : "none"}}>
        {props.content}
      </div>
    )
  }

  return (
    <form id="add-data" onSubmit={submitHandler}>
      <h2>Add a book</h2>
      <label htmlFor="title">Book Title</label>
      <input type="text" className="form-control" name="title" placeholder="Book title" id="title" />
      <label htmlFor="tagline">Tag Line</label>
      <input type="text" className="form-control" name="tagline" placeholder="Book tag line" id="tagline" />

      <div className="row">
        <div className="col-md-6">
          <label htmlFor="isbn13">ISBN 13</label>
          <input type="text" className="form-control" name="isbn13" placeholder="ISBN 13" id="isbn13" />
        </div>
        <div className="col-md-6">
          <label htmlFor="isbn10">ISBN 10</label>
          <input type="text" className="form-control" name="isbn10" placeholder="ISBN 10" id="isbn10" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <label htmlFor="author">Author (if more than one, separate by a comma)</label>
          <input type="text" className="form-control" name="author" placeholder="author1,author2" id="author" />
        </div>
        <div className="col-md-6">
          <label htmlFor="publisher">Publisher</label>
          <input type="text" className="form-control" name="publisher" placeholder="Book publisher" id="publisher" />
        </div>
      </div>

      <label htmlFor="year">Year</label>
      <input type="number" className="form-control" name="year" placeholder="Year published" id="year" />
      <label htmlFor="pages">Pages</label>
      <input type="number" className="form-control" name="pages" placeholder="Pages" id="pages" />

      <label htmlFor="cover_image">Image</label>
      <input type="file" className="form-control" name="cover_image" placeholder="Cover image" id="cover_image" />

      <div className="mt-3 buttons d-flex flex-row justify-content-between">
        <button type="reset" className="btn btn-secondary">Reset</button>
        <button type="submit" className="btn btn-primary">Add Book</button>
      </div>
      <Message content={message} />
    </form>
  )
}