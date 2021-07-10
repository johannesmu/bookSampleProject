import Image from '../Assets/spinner.png'
import '../styles/spinner.css'

export function Spinner( props ) {
  return(
    <div className="spinner" style={{width: props.width + 'px'}}>
      <img src={Image} />
    </div>
  )
}