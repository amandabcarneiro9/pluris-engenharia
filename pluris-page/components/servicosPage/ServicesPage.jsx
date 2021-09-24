import Layout from '../layout'
import Image from 'next/image'
import style from './servicosPage.module.scss'

const name = 'calculadora sobre a mesa'

export default function ServicesPage({ servicoName }) {
  return (
    <Layout>
      <div className={style.firstBlock}>
        <Image priority src="/images/calculadoraBlue.jpg" height={600} width={1600} alt={name} />
        <span className={style.serviceName}>Serviços administrativos</span>
      </div>
    </Layout>
  )
}
