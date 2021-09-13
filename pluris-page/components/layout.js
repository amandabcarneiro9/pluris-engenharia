import Head from 'next/head'
import Header from './header/Header'
import styles from './layout.module.scss'

const name = 'home foto'
export default function Layout({ home, children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pluris Engenharia</title>
        <meta name="Pluris engenharia" content=" Pluris serviços de Engenharia" />
      </Head>
      <Header />
      {children}
    </div>
  )
}
