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
        <link rel="preload" href="/fonts/Noto_Sans/NotoSans-Regular.ttf" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/Noto_Sans/NotoSans-Bold.ttf" as="font" crossOrigin="" />
      </Head>
      <Header />
      {children}
    </div>
  )
}
