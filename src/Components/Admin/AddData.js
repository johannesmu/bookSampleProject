import { fromBits } from 'long'
import { useState } from 'react'

export function AddData(props) {
  const [authorCount, setAuthorCount] = useState(1)

  const submitHandler = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const obj = new Object()
    formData.forEach((value, key) => {
      obj[key] = value
    })
    console.log(obj)
    // props.handler(obj)
    //   .then((response) => console.log('success'))
    //   .catch((error) => console.log(error))
  }

  const Authors = (props) => {
    // generate an array from the number of authors
    let inputCount = []
    for (let i = 0; i < props.count; i++) {
      inputCount.push(i)
    }
    const Inputs = inputCount.map((number) => {
      return (
        <div>
          <label htmlFor={"author" + number}>{(authorCount > 1) ? "Author " + (number + 1) : "Author"}</label>
          <div className="input-group">
          <input 
            type="text" 
            className="form-control" 
            name="authors[]" 
            placeholder="Book author" 
            id={"author" + number} 
          />
          <button 
            class="btn btn-outline-secondary" 
            type="button" 
            id={"author" + number + "button"}
            style={{ display: (number === 0) ? "none" : "block"}}
            onClick={ () => setAuthorCount(authorCount - 1) }
          >
            Remove
          </button>
          </div>
        </div>
      )
    })
    return (
      <div className="authors">
        {Inputs}
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
          <Authors count={authorCount} />
          <button className="btn btn-outline-primary my-2" type="button" onClick={() => setAuthorCount(authorCount + 1)}>
            <i className="plus-circle"></i>Add another author
          </button>
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
      <input type="text" className="form-control" name="cover_image" placeholder="Cover image" id="cover_image" />
      <div className="mt-3 buttons d-flex flex-row justify-content-between">
        <button type="reset" className="btn btn-secondary">Reset</button>
        <button type="submit" className="btn btn-primary">Add Book</button>
      </div>
    </form>
  )
}