import Head from 'next/head'
import Layout from '../components/layout'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const name = 'home foto'
const siteTitle = 'Início'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
    </Layout>
  )
}
