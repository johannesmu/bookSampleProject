export function AddData(props) {
  return (
    <form id="add-data">
      <label htmlFor="title">Book Title</label>
      <input type="text" className="form-control" name="title" placeholder="Book title" id="title" />
      <label htmlFor="tagline">Tag Line</label>
      <input type="text" className="form-control" name="tagline" placeholder="Book tag line" id="tagline" />
      <label htmlFor="isbn13">ISBN 13</label>
      <input type="text" className="form-control" name="isbn13" placeholder="ISBN 13" id="isbn13" />
      <label htmlFor="isbn10">ISBN 10</label>
      <input type="text" className="form-control" name="isbn10" placeholder="ISBN 10" id="isbn10" />
      <label htmlFor="author">Author</label>
      <input type="text" className="form-control" name="author" placeholder="Book author" id="author" />
      <label htmlFor="publisher">Publisher</label>
      <input type="text" className="form-control" name="publisher" placeholder="Book publisher" id="publisher" />
      <label htmlFor="year">Year</label>
      <input type="number" className="form-control" name="year" placeholder="Year published" id="year" />
      <label htmlFor="pages">Pages</label>
      <input type="number" className="form-control" name="pages" placeholder="Pages" id="pages" />
      <label htmlFor="cover_image">Image</label>
      <input type="text" className="form-control" name="cover_image" placeholder="Cover image" id="cover_image" />
      <div className="buttons row d-flex flex-row justify-content-between">
        <button type="reset" className="btn btn-secondary">Reset</button>
        <button type="submit" className="btn btn-primary">Add Book</button>
      </div>
    </form>
  )
}