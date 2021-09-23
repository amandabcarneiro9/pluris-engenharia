import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Style from './footer.module.scss'
import util from '../../styles/util.module.scss'

const name = 'Pluris Engenharia logo'
export default function Footer() {
  return (
    <div>
      <div className={Style.image}>
        <Image priority src="/images/logo.png" className={util.logo} height={200} width={200} alt={name} />
      </div>
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

      <div className={Style.contactIcons}>
        <div className={Style.contacts}>
          <FontAwesomeIcon icon={['fab', 'whatsapp']} className={Style.icon} />
          <span className={Style.info}>(xx)xxxx-xxxxx</span>
        </div>
        <div className={Style.contacts}>
          <FontAwesomeIcon icon={['fas', 'envelope-square']} className={Style.icon} />
          <span className={Style.info}>comercial@plurisengenharia.com</span>
        </div>

        <div className={Style.contacts}>
          <FontAwesomeIcon icon={['fas', 'map-marker-alt']} className={Style.icon} />
          <span className={Style.info}>Rua: exemplo exemplo exemplo,980 Bairro Cidade</span>
        </div>
      </div>
    </div>
  )
}
