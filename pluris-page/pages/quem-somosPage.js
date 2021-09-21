import Layout from '../components/layout'
import Image from 'next/image'

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
            A Pluris Engenharia é um empresa formada por profissionais qualificados e comprometidos em entregar sempre o
            melhor aos seus clientes. Atuando há 3 anos no mercado, a Pluris Engenharia mantém como objetivo realizar os
            sonhos dos seus clientes seguindo os valores e princípios da empresa.
          </p>
        </div>
      </div>
    </Layout>
  )
}
