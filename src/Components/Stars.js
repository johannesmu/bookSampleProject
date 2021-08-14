export const Stars = (props) => {
  let elements = []
  // stars is out of 5, so if i < number of stars add 1, else add 0
  // so for 1 star, array will be [1,0,0,0,0]
  for (let i = 0; i < 5; i++) {
    elements.push((i < props.number) ? 1 : 0)
  }

  const Items = elements.map((item) => {
    if (item === 1) {
      // return solid star if value is 1
      return <i className="fas fa-star"></i>
    }
    else {
      // return empty star otherwise (value is 0)
      return <i class="far fa-star"></i>
    }
  })

  return (
    <div className="d-flex text-success">
      {Items}
    </div>
  )
}