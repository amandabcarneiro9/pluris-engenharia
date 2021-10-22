import Layout from '../components/layout'
import SvgBlock from '../components/svgBlock/SvgBlock'
import ContactForm from '../components/contactForm/contactForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Style from '../styles/contato.module.scss'
import util from '../styles/util.module.scss'

export default function Contato() {
  return (
    <Layout>
      <SvgBlock svgClassNameColor={util.svgBlockBlack} />
      <div className={Style.container}>
        <h2 className={util.titleBlue}>Entre em contato </h2>
        <div className={Style.content}>
          <div className={Style.informations}>
            <span className={Style.firstMessage}>
              Tem sugestões, dúvidas ou gostaria de um orçamento ? Entre em contato através do nosso formulário .
            </span>
            <span>Ficaremos feliz em te ajudar !</span>
          </div>
          <div className={Style.contactIcons}>
            <span className={util.titleBlueMinor}>Você também pode nos encontrar por aqui </span>
            <div className={Style.contacts}>
              <a href="https://api.whatsapp.com/send?phone=5512997079171" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={['fab', 'whatsapp']} className={Style.icon} />
              </a>
              <span className={Style.info}>(12) 99707-9171</span>
            </div>
            <div className={Style.contacts}>
              <FontAwesomeIcon icon={['fas', 'envelope-square']} className={Style.icon} />
              <span className={Style.info}>comercial@plurisengenharia.com</span>
            </div>

            <div className={Style.contacts}>
              <a href="https://www.linkedin.com/company/pluris-engenharia" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={['fab', 'linkedin']} className={Style.icon} />
              </a>
              <span className={Style.info}>pluris-engenharia</span>
            </div>

            <div className={Style.contacts}>
              <a href="https://www.instagram.com/pluris_engenharia/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={['fab', 'instagram-square']} className={Style.icon} />
              </a>
              <span className={Style.info}>@pluris_engenharia</span>
            </div>
          </div>
          <div className={Style.contactForm}>
            <ContactForm />
          </div>
        </div>
      </div>
    </Layout>
  )
}
