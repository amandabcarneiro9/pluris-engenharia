import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Style from './values.module.scss'

export default function Values() {
  return (
    <div className={Style.values}>
      <div className={Style.value}>
        <div className={Style.icon}>
          <FontAwesomeIcon icon={['fas', 'award']} />
        </div>
        <span className={Style.valueSpan}>
          Qualidade em todos os processos. Desde o projeto até o seu desenvolvimento.{' '}
        </span>
      </div>

      <div className={Style.value}>
        <div className={Style.icon}>
          <FontAwesomeIcon icon={['fas', 'leaf']} />
        </div>
        <span className={Style.valueSpan}>
          Comprometimento com o meio ambiente através de projetos de menor impacto.{' '}
        </span>
      </div>

      <div className={Style.value}>
        <div className={Style.icon}>
          <FontAwesomeIcon icon={['fas', 'handshake']} />
        </div>
        <span className={Style.valueSpan}>
          Comunicação eficiente entre a empresa e os clientes para os alinhamentos dos projetos.{' '}
        </span>
      </div>

      <div className={Style.value}>
        <div className={Style.icon}>
          <FontAwesomeIcon icon={['fas', 'hard-hat']} />
        </div>
        <span className={Style.valueSpan}>
          Profissionais qualificados e preparados com as melhores técnicas do mercado.{' '}
        </span>
      </div>
    </div>
  )
}
