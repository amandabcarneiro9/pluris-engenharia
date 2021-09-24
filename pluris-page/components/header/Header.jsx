import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import styles from './header.module.scss'
import utilStyles from '../../styles/util.module.scss'
import Hamburger from 'hamburger-react'
import Image from 'next/image'

const name = 'logo'
export default function Header() {
  const headerElement = useRef('')
  const [isOpen, setOpen] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', changeNavClass)

    return () => {
      window.removeEventListener('scroll', changeNavClass)
    }
  }, [changeNavClass])

  function changeNavClass(event) {
    headerElement.current && headerElement.current.classList.toggle(styles.active, event.currentTarget.scrollY > 50)
  }

  return (
    <header ref={headerElement} className={`${styles.header} ${isOpen && styles.menuOpened}`}>
      <Hamburger toggled={isOpen} toggle={setOpen} />
      <Link href="/" className={styles.image}>
        <Image priority src="/images/logo.png" className={utilStyles.logo} height={80} width={80} alt={name} />
      </Link>
      <div className={styles.navLinks}>
        <Link href="/">
          <a className={styles.link}>Início</a>
        </Link>
        <Link href="/quem-somosPage">
          <a className={styles.link}>Quem Somos</a>
        </Link>
        <Link href="/">
          <a className={styles.link}>Serviços</a>
        </Link>
        <Link href="/">
          <a className={styles.link}>Galeria de Projetos</a>
        </Link>
        <Link href="/contato">
          <a className={styles.link}>Contato</a>
        </Link>
      </div>
    </header>
  )
}
