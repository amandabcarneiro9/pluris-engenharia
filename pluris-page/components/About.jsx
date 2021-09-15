import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Style from './About.module.scss'
import utilStyles from '../styles/util.module.scss'

export default function About() {
  return (
    <div className={Style.container}>
      <div className={Style.values}>
        <div className={Style.value}>
          <div className={Style.icon}>
            <FontAwesomeIcon icon={['fas', 'award']} />
          </div>
          <span>Qualidade em todos os processos. Desde o projeto até o seu desenvolvimento. </span>
        </div>

        <div className={Style.value}>
          <div className={Style.icon}>
            <FontAwesomeIcon icon={['fas', 'leaf']} />
          </div>
          <span>Comprometimento com o meio ambiente através de projetos de menor impacto. </span>
        </div>

        <div className={Style.value}>
          <div className={Style.icon}>
            <FontAwesomeIcon icon={['fas', 'handshake']} />
          </div>
          <span>Comunicação eficiente entre a empresa e os clientes para os alinhamentos dos projetos. </span>
        </div>

        <div className={Style.value}>
          <div className={Style.icon}>
            <FontAwesomeIcon icon={['fas', 'hard-hat']} />
          </div>
          <span>Profissionais qualificados e preparados com as melhores técnicas do mercado. </span>
        </div>
      </div>

      <div className={Style.quemSomos}>
        <h2 className={utilStyles.titleBlack}>Quem somos</h2>
        <p className={Style.content}>
          A Pluris Engenharia é um empresa formada por profissionais qualificados e comprometidos em entregar sempre o
          melhor aos seus clientes. Atuando há 3 anos no mercado, a Pluris Engenharia mantém como objetivo realizar os
          sonhos dos seus clientes seguindo os valores e princípios da empresa.{' '}
        </p>{' '}
        <button className={utilStyles.buttonBlue}>Venha nos conhecer melhor</button>
      </div>
    </div>
  )
}
