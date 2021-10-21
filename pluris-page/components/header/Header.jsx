import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import styles from './header.module.scss'
import utilStyles from '../../styles/util.module.scss'
import Hamburger from 'hamburger-react'
import Image from 'next/image'
import Layout from '../layout'

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
      <Link href="/">
        <a className={styles.image}>
          <Image priority src="/images/logo.png" className={utilStyles.logo} height={80} width={80} alt={name} />
        </a>
      </Link>
      <div className={styles.navLinks}>
        <Link href="/">
          <a className={styles.link}>Início</a>
        </Link>
        <Link href="/quem-somosPage">
          <a className={styles.link}>Quem Somos</a>
        </Link>
        <Dropdown linkTo="/#servicos" label="Serviços">
          <Link href="/servicos-administrativos">
            <a className={styles.linkDropdown}>Serviços Administrativos</a>
          </Link>
          <Link href="/servicos-de-engenharia">
            <a className={styles.linkDropdown}>Serviços de Engenharia</a>
          </Link>
          <Link href="/servico-de-tecnico-civil">
            <a className={styles.linkDropdown}>Serviços de Técnico Civíl</a>
          </Link>
          <Link href="/servicos-de-mao-de-obra">
            <a className={styles.linkDropdown}>Serviços de mão de obra</a>
          </Link>
        </Dropdown>
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

function Dropdown({ linkTo, label, children }) {
  const [opened, setOpened] = useState(false)
  function toggleDropDown(event) {
    event.preventDefault()
    setOpened(!opened)
  }
  return (
    <div className={`${styles.dropdown} ${opened ? styles.dropdownShowing : ''}`}>
      <Link href={linkTo} onClick={toggleDropDown}>
        {label}
      </Link>
      <div>{children}</div>
    </div>
  )
}
