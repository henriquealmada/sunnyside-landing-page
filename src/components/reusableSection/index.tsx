import eggDesktop from '../../assets/desktop/image-transform.jpg'
import eggMobile from '../../assets/mobile/image-transform.jpg'
import cupDesktop from '../../assets/desktop/image-stand-out.jpg'
import cupMobile from '../../assets/mobile/image-stand-out.jpg'
import styles from './ReusableSection.module.css'

type Props = {
  transform?: boolean
}

const ReusableSection = ({ transform }: Props) => {
  return (
    <section
      className={`${styles.transform} ${!transform ? styles.inverted : ''}`}
    >
      <div className={styles['text-col']}>
        {transform ? (
          <h2>Transform your brand</h2>
        ) : (
          <h2>Stand out to the right audience</h2>
        )}
        {transform ? (
          <p>
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
        ) : (
          <p>
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
        )}
        <a
          className={`${styles['learn-more']} ${
            styles[transform ? 'learn-more-yellow' : 'learn-more-red']
          }`}
          href="#"
        >
          LEARN MORE
        </a>
      </div>
      <div className={styles['img-col']}>
        <picture>
          <source
            srcSet={transform ? eggDesktop : cupDesktop}
            media="(min-width: 550px)"
          />
          <img
            src={transform ? eggMobile : cupMobile}
            alt={transform ? 'egg' : 'cup'}
          />
        </picture>
      </div>
    </section>
  )
}

export default ReusableSection
