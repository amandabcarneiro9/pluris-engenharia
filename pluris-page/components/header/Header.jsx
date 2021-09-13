import Link from 'next/link'
import { useState } from 'react'
import styles from './header.module.scss'
import utilStyles from '../../styles/util.module.scss'
import Hamburger from 'hamburger-react'
import Image from 'next/image'

const name = 'logo'
export default function Header() {
  const [isOpen, setOpen] = useState(false)

  function linkClick() {
    setOpen(false)
  }

  return (
    <header className={`${styles.header} ${isOpen && styles.menuOpened}`}>
      <Hamburger toggled={isOpen} toggle={setOpen} />
      <div className={styles.image}>
        <Image priority src="/images/logo.png" className={utilStyles.logo} height={80} width={80} alt={name} />
      </div>
      <div className={styles.navLinks}>
        <Link href="/">
          <a className={styles.link}>Início</a>
        </Link>
        <Link href="/">
          <a className={styles.link}>Quem Somos</a>
        </Link>
        <Link href="/">
          <a className={styles.link}>Serviços</a>
        </Link>
        <Link href="/">
          <a className={styles.link}>Galeria de Projetos</a>
        </Link>
        <Link href="/">
          <button className={utilStyles.buttonBlue}>Entre em contato</button>
        </Link>
      </div>
    </header>
  )
}
