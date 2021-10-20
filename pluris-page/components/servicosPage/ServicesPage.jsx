import Layout from '../layout'
import Image from 'next/image'
import SvgBlock from '../svgBlock/SvgBlock'
import style from './servicosPage.module.scss'
import ContactForm from '../contactForm/contactForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import util from '../../styles/util.module.scss'

const name = 'calculadora sobre a mesa'

export default function ServicesPage({ servicoName, imageName, children }) {
  return (
    <Layout>
      <div className={style.firstBlock}>
        <Image priority src={`/images/${imageName}.jpg`} height={600} width={1600} alt={name} />
        <span className={style.serviceName}>{servicoName}</span>
      </div>
      <div className={style.descriptionBlock}>
        {children}
        {/* <div className={style.description}>
          <div className={style.icon}>
            <FontAwesomeIcon icon={['fas', 'chevron-right']} />
          </div>
          <span>{descriptionService1} </span>
        </div>
        <div className={style.description}>
          <div className={style.icon}>
            <FontAwesomeIcon icon={['fas', 'chevron-right']} />
          </div>
          <span>{descriptionService2} </span>
        </div>
        <div className={style.description}>
          <div className={style.icon}>
            <FontAwesomeIcon icon={['fas', 'chevron-right']} />
          </div>
          <span>{descriptionService3} </span>
        </div>
        <div className={style.description}>
          <div className={style.icon}>
            <FontAwesomeIcon icon={['fas', 'chevron-right']} />
          </div>
          <span>{descriptionService4} </span>
        </div> */}
      </div>
      <div className={style.whyChooseBlock}>
        <SvgBlock svgClassNameColor={util.svgBlockBlack} />
        <h2 className={util.titleWhite}>Porquê escolher a Pluris Engenharia?</h2>
        <p className={style.textDescription}>
          A Pluris Engenharia é uma empresa que é sinônimo de qualidade no mercado. Com objetivo de oferecer um serviço
          completo, a empresa dispõe de serviços de administração do projeto até a execução da obra e seu
          acompanhamento. Além disso, empresa oferece o diferencial da planta 3D para que os clientes possam ver seus
          sonhos tomando forma e sugerir os ajustes que desejar. Trabalhando de forma ampla, com responsabilidade e
          segurança os clientes podem confiar seus sonhos à Pluris Engenharia.
        </p>
      </div>

      <div className={style.contact}>
        <h2 className={util.titleBlue}>Gostaria de um orçamento?</h2>
        <span className={style.text}>
          Entre em contato e tire os sonhos apenas dos planos, nós colocamos eles no papel pra você!
        </span>
        <ContactForm />
      </div>
    </Layout>
  )
}

export function ServiceDescription({ children }) {
  return (
    <div className={style.description}>
      <div className={style.icon}>
        <FontAwesomeIcon icon={['fas', 'chevron-right']} />
      </div>
      <span>{children} </span>
    </div>
  )
}
