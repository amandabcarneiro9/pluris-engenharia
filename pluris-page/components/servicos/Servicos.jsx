import Style from './servicos.module.scss'
import utilStyles from '../../styles/util.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'

export default function Servicos() {
  return (
    <>
      <div className={Style.container}>
        <h2 className={utilStyles.titleBlue}>Serviços</h2>
        <div className={Style.services}>
          <Service
            href="/servicos-administrativos"
            name="Serviços Administrativos"
            imageName="calculadora"
            paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam necessitatibus, consectetur earum maxime ut
        beatae"
          />
          <Service
            href="/servicos-administrativos"
            name="Serviços de engenharia "
            imageName="casa-em-obra"
            paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam necessitatibus, consectetur earum maxime ut
        beatae"
          />
          <Service
            href="/servicos-administrativos"
            name="Serviços de técnico civil"
            imageName="supervisao-de-obra"
            paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam necessitatibus, consectetur earum maxime ut
        beatae"
          />
          <Service
            href="/servicos-administrativos"
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

function Service({ name, paragraph, imageName, href }) {
  return (
    <Link href={href}>
      <a>
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
      </a>
    </Link>
  )
}
