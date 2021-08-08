import { useState,useEffect } from "react"
export function Register(props) {
  const [validUserName,setValidUserName] = useState()
  const [userNameErrors,setUserNameErrors] = useState([])
  const [validEmail,setValidEmail] = useState()
  const [emailErrors,setEmailErrors] = useState([])
  const [validPassword,setValidPassword] = useState()
  const [passwordErrors,setPasswordErrors] = useState([])
  const [validForm,setValidForm] = useState(false)

  useEffect( () => {
    if( validUserName && validEmail && validPassword ) {
      setValidForm( true )
    }
    else {
      setValidForm( false )
    }
  },[validUserName,validEmail,validPassword])

  const submitHandler = (event) => {
    event.preventDefault()
    const data = new FormData(event.target)
    props.handler(data.get('email'), data.get('password'))
  }

  const validateUserName = (event) => {
    const name = event.target.value
    
    // store errors in an array to be shown to user
    let errors = []
    // check length of name
    const len = name.length
    if( len < 6 ) {
      errors.push("minimum 6 characters")
    }
    // -- check if it contains invalid characters including space
    // list of invalid characters
    const invalidChars = '~!@#$%^&*()+=-`|\{}[]:;"?/><,. '.split('')
    const chars = name.split('')
    // count invalid characters found
    let invalidCount = 0
    chars.forEach( (chr) => {
      if( invalidChars.includes(chr) ) { invalidCount++ }
    })
    if( invalidCount > 0 ) {
      errors.push(`contains ${invalidCount} invalid ${ (invalidCount > 1) ? "characters" : "character"}`)
    }
    // -- check if all characters are numbers
    if( Number(name) ) {
      errors.push("cannot contain only numbers")
    }
    if( Number( name.charAt(0) )) {
      errors.push("first character cannot be a number")
    }
    setUserNameErrors( errors.join(', ') )
    if( errors.length === 0 ) {
      setValidUserName( true )
    }
    else{
      setValidUserName( false )
    }
  }

  const validateEmail = ( event ) => {
    const email = event.target.value
    // console.log(email.split('.'))
    let errors = []
    if( email.indexOf('@') === 0 ) {
      errors.push('Need username before "@" symbol')
    }
    if( email.indexOf('@') === -1 ) {
      errors.push('Need "@" symbol after username')
    }
    if( email.split('.').length < 2) {
      errors.push('Need tld, eg .com')
    }
    setEmailErrors( errors.join(', ') )
    if( errors.length === 0 ) {
      setValidEmail( true )
    }
    else{
      setValidEmail( false )
    }
  }

  const validatePassword = ( event) => {
    const password = event.target.value
    let errors = []
    // -- check password length
    if( password.length < 8 ) {
      errors.push( 'Minimum length is 8 characters' )
    }
    // -- check if it contains capital
    const caps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    const chars = password.split('')
    let capsCount = 0
    let numCount = 0
    chars.forEach( (chr) => {
      if( caps.includes(chr) ) { capsCount++ }
      if( parseInt(chr) ) { numCount++ }
    })
    if( capsCount === 0 ) {
      errors.push('Need to contain a capital letter')
    }
    if( numCount === 0 ) {
      errors.push('Need to contain a number')
    }
    setPasswordErrors( errors.join(', ') )
    if( errors.length === 0 ) {
      setValidPassword( true )
    }
    else{
      setValidPassword( false )
    }
  }

  const validationClass = ( mainClass, validState) => {
    if( validState === true ) {
      return `${mainClass}  is-valid`
    }
    else if( validState === false ) {
      return `${mainClass}  is-invalid`
    }
    else {
      return mainClass
    }
  }

  return (
    <div className="row mt-4">
      <form className="col-md-6 offset-md-3 col-lg-4 offset-lg-4" id="register" onSubmit={submitHandler}>
        <h4>Register for an account</h4>
        <label className="form-label" htmlFor="username">Username</label>
        <input 
          className={validationClass("form-control",validUserName)}
          type="text" 
          name="username" 
          id="username" 
          onChange={validateUserName} 
          placeholder="letters and numbers no spaces" 
        />
        <div className="invalid-feedback">{userNameErrors}</div>
        <label className="form-label" htmlFor="email">Email</label>
        <input 
          className={validationClass("form-control",validEmail)} 
          type="email" 
          name="email" 
          id="email" 
          onChange={validateEmail}
          placeholder="me@example.com" 
        />
        <div className="invalid-feedback">{emailErrors}</div>
        <label className="form-label" htmlFor="password">Password</label>
        <input 
          className={validationClass("form-control",validPassword)} 
          type="password" 
          name="password" 
          id="password" 
          placeholder="minimum 8 characters" 
          onChange={validatePassword}
        />
        <div className="invalid-feedback">{passwordErrors}</div>
        <div className="d-flex justify-content-center mt-3">
          <button 
            type="submit" 
            className="btn btn-primary flex-fill"
            disabled = { (!validForm) ? true : false }
          >
            Register
          </button>
        </div>
      </form>
    </div>
  )
}