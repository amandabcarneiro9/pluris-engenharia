import Style from './servicos.module.scss'
import utilStyles from '../styles/util.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

export default function Servicos() {
  return (
    <>
      <div className={Style.container}>
        <h2 className={utilStyles.titleBlue}>Serviços</h2>
        <div className={Style.services}>
          <Service
            name="Serviços Administrativos"
            imageName="calculadora"
            paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam necessitatibus, consectetur earum maxime ut
        beatae"
          />

          <Service
            name="Serviços de engenharia "
            imageName="casa-em-obra"
            paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam necessitatibus, consectetur earum maxime ut
        beatae"
          />

          <Service
            name="Serviços de técnico civil "
            imageName="supervisão-de-obra"
            paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam necessitatibus, consectetur earum maxime ut
        beatae"
          />

          <Service
            name="Serviços de mão de obra para construção civil"
            imageName="trabalhadores"
            paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam necessitatibus, consectetur earum maxime ut
        beatae"
          />
        </div>
      </div>
    </>
  )
}
function Service({ name, paragraph, imageName }) {
  return (
    <div className={Style.service}>
      <div className={Style.flip}>
        <div className={Style.serviceCard}>
          <Image
            priority
            src={`/images/${imageName}.jpg`}
            className={Style.image}
            height={250}
            width={250}
            alt={name}
          />
          <span className={Style.serviceArrow}>→</span>
          <h3 className={Style.serviceTitle}>{name}</h3>
        </div>
        <div className={[Style.serviceCard, Style.serviceCardBack].join(' ')}>{paragraph}</div>
      </div>
    </div>
  )
}
