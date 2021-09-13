import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Style from './QuemSomos.module.scss'

export default function QuemSomos() {
  return (
    <div className={Style.quemSomos}>
      <h2 className={Style.title}>Quem somos</h2>
      <p>
        Empresa formada por profissionais escpecializados e destacados no mercado com o compromisso de realizar obras
        visando a qualidade superior, comprometimento com os prazos e segurança em todos os ambitos.{' '}
      </p>

      <div className={Style.values}>
        <div className={Style.value}>
          <div className={Style.icon}>
            <FontAwesomeIcon icon={['fas', 'medal']} />
          </div>
          <span>Agregamos qualidade aos projetos para realizar os sonhos dos nossos clientes.</span>
        </div>
        <div className={Style.value}>
          <div className={Style.icon}>
            <FontAwesomeIcon icon={['fas', 'handshake']} />
          </div>
          <span>Trabalhamos com confiança e seguranças para os clientes e trabalhadores da obra.</span>
        </div>
        <div className={Style.value}>
          <div className={Style.icon}>
            <FontAwesomeIcon icon={['fas', 'leaf']} />
          </div>
          <span>Nos preocupamos com o meio ambiente de modo a fazer projetos pensando em menor impacto.</span>
        </div>
        <div className={Style.value}>
          <div className={Style.icon}>
            <FontAwesomeIcon icon={['fas', 'hard-hat']} />
          </div>
          <span>Nossos profissionais são qualificados e detalhistas para entregarem o melhor para os clientes. </span>
        </div>
      </div>

      <button>Venha nos conhecer melhor</button>
    </div>
  )
}
