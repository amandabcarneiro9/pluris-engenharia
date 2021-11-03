import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Style from './footer.module.scss'
import SvgBlock from '../svgBlock/SvgBlock.jsx'
import util from '../../styles/util.module.scss'

const name = 'Pluris Engenharia logo'
export default function Footer() {
  return (
    <>
      <div className={Style.footer}>
        <div className={Style.navLinks}>
          <Link href="/">
            <a className={Style.link}>Início</a>
          </Link>
          <Link href="/quem-somosPage">
            <a className={Style.link}>Quem Somos</a>
          </Link>
          <Link href="/">
            <a className={Style.link}>Serviços</a>
          </Link>
          <Link href="/">
            <a className={Style.link}>Galeria de Projetos</a>
          </Link>
          <Link href="/contato">
            <a className={Style.link}>Entre em contato</a>
          </Link>
        </div>

        <div className={Style.contacts}>
          <div className={Style.contactInfo}>
            <a href="https://api.whatsapp.com/send?phone=5512997079171" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={['fab', 'whatsapp']} className={Style.icon} />
            </a>
            <span className={Style.info}>(12) 99707-9171</span>
          </div>

          <div className={Style.contactInfo}>
            <FontAwesomeIcon icon={['fas', 'envelope-square']} className={Style.icon} />
            <span className={Style.info}>comercial@plurisengenharia.com</span>
          </div>
        </div>
        <div className={Style.image}>
          <Image priority src="/images/logo.png" className={util.logo} height={150} width={150} alt={name} />
        </div>
      </div>
      <div className={Style.midias}>
        <span className={Style.mention}>© Todos os direitos reservados.</span>
        <div className={Style.socialMidias}>
          <a href="https://www.linkedin.com/company/pluris-engenharia" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={['fab', 'linkedin']} className={Style.iconMidias} />
          </a>
          <a href="https://www.instagram.com/pluris_engenharia/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={['fab', 'instagram']} className={Style.iconMidias} />
          </a>
        </div>
      </div>
    </>
  )
}
