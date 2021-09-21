import Layout from '../components/layout'
import Image from 'next/image'
import Values from '../components/Values'
import Style from '../styles/quem-somos.module.scss'

export default function QuemSomos() {
  return (
    <Layout>
      <div className={Style.container}>
        <div className={Style.apresentation}>
          <Image
            priority
            src="/images/hats.jpg"
            // className={Style.image}
            height={800}
            width={1600}
            alt="capacetes de obras enfileirados"
          />
          <p className={Style.firstText}>
            A Pluris Engenharia é um empresa formada por profissionais qualificados e comprometidos em entregar o melhor
            possível aos seus clientes. Atuando há 3 anos no mercado, a Pluris Engenharia mantém como objetivo realizar
            os sonhos dos seus clientes seguindo os valores e princípios da empresa, assim como qualidade e segurança em
            todas as etapas.
          </p>
        </div>

        <div>
          <span>Missão</span>
          <p>
            Ser líder nacional em realização de sonhos com soluções inovadoras e logísticas que agregam custo benefício
            para os projetos.
          </p>
        </div>
        <Values />

        <div>
          <span>Visão</span>
          <p>
            Ser líder nacional em realização de sonhos com soluções inovadoras e logísticas que agregam custo benefício
            para os projetos.
          </p>
        </div>
      </div>
    </Layout>
  )
}
