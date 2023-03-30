import Testimonial from './Testimonial'
import { testimonials } from '../../utils/testimonials'
import styles from './Testimonials.module.css'

const Testimonials = () => {
  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <h2>client testimonials</h2>
        <div className={styles['testimonials-container']}>
          {testimonials.map((t, index) => (
            <Testimonial key={index} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
