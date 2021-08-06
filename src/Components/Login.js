import { useHistory } from "react-router"
export function Login ( props ) {

  const history = useHistory()

  const submitHandler = ( event ) => {
    event.preventDefault()
    const data = new FormData( event.target )
    props.handler( data.get('email'), data.get('password') )
    .then( (response) => {
      if(response === true ) {
        history.push('/')
      }
    })
    .catch( (error) => {
      console.log( error )
    })
  }

  return(
    <div className="row mt-4">
      <form className="col-md-4 offset-md-4" id="login" onSubmit={ submitHandler }>
        <h4>Sign in to your account</h4>
        <label className="form-label" htmlFor="email">Email</label>
        <input className="form-control" type="email" name="email" id="email" />
        <label className="form-label" htmlFor="password">Password</label>
        <input className="form-control" type="password" name="password" id="password" />
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  )
}