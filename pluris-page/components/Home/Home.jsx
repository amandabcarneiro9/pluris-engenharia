import Image from 'next/image'
import styles from './home.module.scss'
import utilStyles from '../../styles/util.module.scss'

const name = 'mão masculina passando cimento no tijolo'

export default function Home() {
  return (
    <>
      <div className={styles.texts}>
        <h1 className={styles.tituloHome}>Qualidade e Confiança em Primeiro Lugar</h1>
        <p className={styles.paragrafoHome}>
          Na Pluris Engenharia você encontra profissionais especializados que analisam as melhores condições para
          realizar os sonhos dos seus clientes.{' '}
        </p>

        <button className={utilStyles.buttonWhite}> Clique para saber mais</button>
      </div>
    </>
  )
}