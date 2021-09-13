import Layout from '../components/layout'
import Inicio from '../components/Home/Home'
import About from '../components/About'
import Servicos from '../components/Servicos'

const name = 'home foto'
const siteTitle = 'Início'

export default function Home() {
  return (
    <Layout home>
      <>
        <Inicio />
        <section>
          <About />
          {/* <Servicos /> */}
        </section>
      </>
    </Layout>
  )
}
