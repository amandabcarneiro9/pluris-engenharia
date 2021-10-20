import Layout from '../components/layout'
import Image from 'next/image'
import Values from '../components/values/Values'
import SvgBlock from '../components/svgBlock/SvgBlock'
import Style from '../styles/quem-somos.module.scss'
import util from '../styles/util.module.scss'
import SlideShow from '../components/carousel/SlideShow'

const phrases = [
  'Ética e Transparência ',
  'Sustentabilidade',
  'Desenvolvimento de pessoas',
  'Integridade e profissionalismo',
  'Iniciativa e criatividade',
  'Comprometimento',
  'O cliente tem razão',
]

export default function QuemSomos() {
  return (
    <Layout>
      <div className={Style.apresentation}>
        <Image
          priority
          src="/images/hats.jpg"
          // className={Style.image}
          height={600}
          width={1600}
          alt="capacetes de obras enfileirados"
        />
        <SlideShow phrases={phrases} />
      </div>

      <div className={Style.historia}>
        <p className={Style.text}>
          Atuando há 3 anos no mercado, a marca Pluris Engenharia foi criada pela junção da experiência e vontade de
          fazer diferente. Pluris vem do latim “mais” é usado no contexto de grande valor na qual buscamos desde o mais
          simples ao mais sofisticado agregando ainda mais a coletividade e união sendo dos colaboradores e clientes.
        </p>
        <p className={Style.text}>
          Temos um time de engenheiros para realizar os projetos e construções perante aos sonhos de nossos clientes,
          orientando nossos colaboradores para especializações a cada área de sua construção. Com o foco em melhoria
          continua em construção civil, ensinamos também aos nossos colaboradores como estruturar o seu financeiro e
          caminho para especialização profissional e desenvolvimento pessoal.
        </p>
      </div>

      <div className={Style.block}>
        <SvgBlock svgClassNameColor={util.svgBlockBlack} />
        <div className={Style.blockContent}>
          <div className={Style.content}>
            <span className={util.titleBlue}>Nossa Missão</span>
            <p className={Style.blockTexts}>
              Ser líder nacional em realização de sonhos com soluções inovadoras e logísticas que agregam custo
              benefício para os projetos.
            </p>
          </div>

          <div className={Style.content}>
            <span className={util.titleBlue}>Nossa Visão</span>
            <p className={Style.blockTexts}>
              Fazer a diferença ao mundo com melhorias continuas, inovadoras na qual agregará nossos colaboradores com a
              principal razão da empresa, SONHOS de nossos clientes.
            </p>
          </div>
        </div>
        <Values />
      </div>
    </Layout>
  )
}
