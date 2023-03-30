import cone from '../../assets/desktop/image-gallery-cone.jpg'
import milkBottles from '../../assets/desktop/image-gallery-milkbottles.jpg'
import orange from '../../assets/desktop/image-gallery-orange.jpg'
import sugarCubes from '../../assets/desktop/image-gallery-sugarcubes.jpg'

import coneMobile from '../../assets/mobile/image-gallery-cone.jpg'
import milkBottlesMobile from '../../assets/mobile/image-gallery-milkbottles.jpg'
import orangeMobile from '../../assets/mobile/image-gallery-orange.jpg'
import sugarCubesMobile from '../../assets/mobile/image-gallery-sugar-cubes.jpg'

import styles from './Gallery.module.css'

const Gallery = () => {
  return (
    <section className={styles.gallery}>
      <picture>
        <source srcSet={milkBottles} media="(min-width: 550px)" />
        <img src={milkBottlesMobile} alt="cherry" />
      </picture>
      <picture>
        <source srcSet={orange} media="(min-width: 550px)" />
        <img src={orangeMobile} alt="cherry" />
      </picture>
      <picture>
        <source srcSet={cone} media="(min-width: 550px)" />
        <img src={coneMobile} alt="cherry" />
      </picture>
      <picture>
        <source srcSet={sugarCubes} media="(min-width: 550px)" />
        <img src={sugarCubesMobile} alt="cherry" />
      </picture>
    </section>
  )
}

export default Gallery
