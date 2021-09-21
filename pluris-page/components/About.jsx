import Style from './About.module.scss'
import Util from '../styles/util.module.scss'
import Link from 'next/link'
import Values from './values'

export default function About() {
  return (
    <>
      <div className={Style.container}>
        <Values />
        <div className={Style.quemSomos}>
          <h2 className={Util.titleBlue}>Quem somos</h2>
          <p className={Style.content}>
            A Pluris Engenharia é um empresa formada por profissionais qualificados e comprometidos em entregar sempre o
            melhor aos seus clientes. Atuando há 3 anos no mercado, a Pluris Engenharia mantém como objetivo realizar os
            sonhos dos seus clientes seguindo os valores e princípios da empresa.{' '}
          </p>{' '}
          <Link
            href={{
              pathname: '/quem-somosPage',
              query: { name: 'quem somos' },
            }}
          >
            <button className={Util.buttonBlue}>Venha nos conhecer melhor</button>
          </Link>
        </div>
      </div>
      <div className={Util.blackSpace}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path className="elementor-shape-fill" d="M761.9,44.1L643.1,27.2L333.8,98L0,3.8V0l1000,0v3.9"></path>
        </svg>
      </div>
    </>
  )
}
