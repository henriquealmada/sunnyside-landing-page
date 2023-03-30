import styles from './Fruits.module.css'
import cherryImg from '../../assets/desktop/image-graphic-design.jpg'
import cherryImgMobile from '../../assets/mobile/image-graphic-design.jpg'
import orangeImg from '../../assets/desktop/image-photography.jpg'
import orangeImgMobile from '../../assets/mobile/image-photography.jpg'

const Fruits = () => {
  return (
    <section className={styles.fruits}>
      <div className={styles['col-left']}>
        <div className={styles.text}>
          <h3>Graphic Design</h3>
          <p>
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </p>
        </div>
        <picture>
          <source srcSet={cherryImg} media="(min-width: 550px)" />
          <img src={cherryImgMobile} alt="cherry" />
        </picture>
      </div>
      <div className={styles['col-right']}>
        <div className={styles.text}>
          <h3>Photography</h3>
          <p>
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
        <picture>
          <source srcSet={orangeImg} media="(min-width: 550px)" />
          <img src={orangeImgMobile} alt="orange" />
        </picture>
      </div>
    </section>
  )
}

export default Fruits
