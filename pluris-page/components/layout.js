import Head from 'next/head'
import Link from 'next/link'
import Header from './Header'
import styles from './layout.module.scss'
import Image from 'next/image'

const name = 'home foto'
export default function Layout({ home, children, siteTitle }) {
  return (
    <div className={styles.container}>
      <Head>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <meta name="Pluris engenharia" content=" Pluris serviços de Engenharia" />

        <title>{siteTitle}</title>
      </Head>
      <Header />
      {home ? (
        <>
          <div>
            <Image priority src="/images/home.jpg" height={650} width={1300} alt={name} />
          </div>{' '}
          <h1 className={styles.tituloHome}>Qualidade e Confiança em Primeiro Lugar</h1>
          <p className={styles.paragrafoHome}>
            Na Pluris Engenharia você encontra profissionais especializados que analisam as melhores condições para
            realizar os sonhos dos seus clientes.{' '}
          </p>
        </>
      ) : (
        ''
      )}
    </div>
  )
}
