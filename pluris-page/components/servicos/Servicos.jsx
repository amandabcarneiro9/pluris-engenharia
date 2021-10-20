import Style from './servicos.module.scss'
import utilStyles from '../../styles/util.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'

export default function Servicos() {
  return (
    <a name="servicos">
      <div className={Style.container} data-section-name="bla">
        <h2 className={utilStyles.titleBlue}>Serviços</h2>
        <div className={Style.services}>
          <Service
            href="/servicos-administrativos"
            name="Serviços Administrativos"
            imageName="calculadora"
            paragraph="Documentação, Contato com fornecedores, Administração Financeira e mais."
          />
          <Service
            href="/servicos-de-engenharia"
            name="Serviços de engenharia "
            imageName="casa-em-obra"
            paragraph="Projeto estrutural, Projetos de terraplanagem,Laudos Técnicos e Ambiental, Georreferenciamento, Avaliação de Terrenos e Glebas Urbanas, Elaboração de Projeto Arquitetônico, Planta 3D
 e mais. "
          />
          <Service
            href="/servico-de-tecnico-civil"
            name="Serviços de técnico civil"
            imageName="supervisao-de-obra"
            paragraph="Interpretação de plantas, gráficos e escalas, Orientação e acompanhamento da Equipe de obras, Instalação do canteiro de obras, Controle de estoque de matéria prima, Controle de resíduos e desperdícios, Controle da segurança dda obra e equipe e mais.  "
          />
          <Service
            href="/servicos-de-mao-de-obra"
            name="Serviços de mão de obra para construção civil"
            imageName="trabalhadores"
            paragraph="Equipe qualificada para construção do projeto, Mestre de obras, Pedreiros e mais. "
          />
        </div>
      </div>
    </a>
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
