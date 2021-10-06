import Image from 'next/image'
import styles from './home.module.scss'
import utilStyles from '../../styles/util.module.scss'

export default function Home() {
  const bla = (event) => {
    event.preventDefault()
    const element = document.querySelector('[data-section-name=bla]')

    element && element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <div className={styles.texts}>
        <h1 className={styles.tituloHome}>Qualidade e Confiança em Primeiro Lugar</h1>
        <p className={styles.paragrafoHome}>
          Na Pluris Engenharia você encontra profissionais especializados que analisam as melhores condições para
          realizar os sonhos dos seus clientes.{' '}
        </p>

        <a className={utilStyles.buttonWhite} href="#servicos" onClick={bla}>
          Conheça nossos serviços
        </a>
      </div>
    </>
  )
}
