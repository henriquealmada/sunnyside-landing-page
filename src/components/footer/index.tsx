import logoGreen from '../../assets/logoGreen.svg'
import facebook from '../../assets/icon-facebook.svg'
import instagram from '../../assets/icon-instagram.svg'
import twitter from '../../assets/icon-twitter.svg'
import pinterest from '../../assets/icon-pinterest.svg'

import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <a className={styles.logo} href="#">
          <img src={logoGreen} alt="logo" />
        </a>
        <div className={styles.links}>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Projects</a>
        </div>
        <div className={styles['social-icons']}>
          <a href="#">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="#">
            <img src={instagram} alt="instagram" />
          </a>
          <a href="#">
            <img src={twitter} alt="twitter" />
          </a>
          <a href="#">
            <img src={pinterest} alt="pinterest" />
          </a>
        </div>
      </div>
      <div className={styles.attribution}>
        Challenge by{' '}
        <a href="https://www.frontendmentor.io" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Henrique Almada</a>.
      </div>
    </footer>
  )
}

export default Footer
