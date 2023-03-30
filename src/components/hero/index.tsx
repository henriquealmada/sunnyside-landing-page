import styles from './Home.module.css'
import arrow from '../../assets/icon-arrow-down.svg'

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1>WE ARE CREATIVES</h1>
        <img src={arrow} alt="arrow down" />
      </div>
    </section>
  )
}

export default Hero
