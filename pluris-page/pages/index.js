import Layout from '../components/layout'
import Inicio from '../components/Home/Home'
import QuemSomos from '../components/QuemSomos/QuemSomos'

const name = 'home foto'
const siteTitle = 'Início'

export default function Home() {
  return (
    <Layout home>
      <>
        <Inicio />
        <section>
          <QuemSomos />
        </section>
      </>
    </Layout>
  )
}
