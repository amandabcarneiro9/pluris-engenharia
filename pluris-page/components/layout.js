import Head from 'next/head'
import Header from './header/Header'
import styles from './layout.module.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
// import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas)

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
