import { useHistory } from "react-router"
export function Logout(props) {
  // reference to history object using router hook
  const history = useHistory()

  const logOut = () => {
    // sign user out
    props.handler()
    // redirect to home page
    history.push('/')
  }

  return (
    <div className="logout mt-4 text-center">
      <h3>So sad to see you go. Hope you come back soon!</h3>
      <button type="submit" className="btn btn-primary mt-2" onClick={logOut}>Logout</button>
    </div>
  )
}