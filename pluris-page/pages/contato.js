import Layout from '../components/layout'
import SvgBlock from '../components/SvgBlock'
import ContactForm from '../components/contactForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Style from '../styles/contato.module.scss'
import util from '../styles/util.module.scss'

export default function Contato() {
  return (
    <Layout>
      <SvgBlock svgClassNameColor={util.svgBlockGrey} />
      <div className={Style.container}>
        <h2 className={util.titleBlue}>Entre em contato </h2>
        <div className={Style.content}>
          <div className={Style.informations}>
            <span className={Style.firstMessage}>
              Tem sugestões, duvidas ou gostaria de um orçamento ? Entre em contato através do formulário ao lado.
            </span>
            <span>Ficaremos feliz em te ajudar !</span>
            <span className={Style.secondMessage}>Você também pode nos encontrar por aqui :</span>
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
          <ContactForm />
        </div>
      </div>
    </Layout>
  )
}
