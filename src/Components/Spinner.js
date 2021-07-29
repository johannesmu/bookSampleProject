import Image from '../Assets/spinner.png'
import '../styles/spinner.css'

export function Spinner( props ) {
  return(
    <div className="spinner d-flex flex-column justify-content-center align-items-center" style={{width: props.width + 'px'}}>
      <img src={Image} />
      <p className="spinner-text" style={{whiteSpace: 'nowrap', textAlign: 'center'}}>
        {props.text}
      </p>
    </div>
  )
}