import logo from '../../assets/logo.svg'
import hamburger from '../../assets/icon-hamburger.svg'
import styles from './Header.module.css'
import { useEffect, useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [navbar, setNavbar] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeBackground)
  })

  return (
    <header
      className={`${styles.header} ${navbar ? styles['change-navbar-bg'] : ''}`}
    >
      <nav>
        <a className={styles.logo} href="#home">
          <img src={logo} alt="sunnyside logo" />
        </a>
        <ul className={`${isMenuOpen ? styles['show-menu'] : ''}`}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a className={styles['contact-btn']} href="#contact">
              Contact
            </a>
          </li>
        </ul>
        <img
          className={styles.hamburger}
          src={hamburger}
          alt="hamburger"
          onClick={() => setIsMenuOpen(prev => !prev)}
        />
      </nav>
    </header>
  )
}

export default Header
