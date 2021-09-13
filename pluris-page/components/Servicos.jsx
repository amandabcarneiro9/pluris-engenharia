import Style from './serviços.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Serviços() {
  return (
    <>
      <div>
        <FontAwesomeIcon icon={['fas', 'medal']} />
      </div>
      <span className={Style.span}>works </span>
    </>
  )
}
