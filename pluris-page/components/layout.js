import Head from 'next/head'
import Link from 'next/link'
import Header from './Header'
import styles from './layout.module.scss'

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <meta name="Pluris engenharia" content=" Pluris serviços de Engenharia" />
      </Head>
      <Header />
    </div>
  )
}
