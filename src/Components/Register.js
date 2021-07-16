export function Register ( props ) {
  return(
    <form id="register">
      <h4>Register for an account</h4>
      <label className="form-label" htmlFor="email">Email</label>
      <input className="form-control" type="email" name="email" id="email" />
      <label className="form-label">Password</label>
      <input className="form-control" type="password" name="password" id="password" />
      <button type="submit" className="btn btn-primary">Register</button>
    </form>
  )
}