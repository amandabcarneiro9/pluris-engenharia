import Style from './About.module.scss'
import Util from '../../styles/util.module.scss'
import Link from 'next/link'
import Values from '../values/Values'
import SvgBlock from '../svgBlock/SvgBlock'

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
            <button className={Util.buttonBlue}>Mais sobre a empresa </button>
          </Link>
        </div>
      </div>
      <div className={Util.blackSpace}>
        <SvgBlock svgClassNameColor={Util.svgBlockBlack} />
      </div>
    </>
  )
}
