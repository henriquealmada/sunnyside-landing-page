import styles from './Testimonial.module.css'

type Props = {
  testimonial: {
    image: string
    text: string
    name: string
    occupation: string
  }
}

const Testimonial = ({
  testimonial: { image, text, name, occupation }
}: Props) => {
  return (
    <div className={styles.testimonial}>
      <img src={image} alt={name} />
      <p>{text}</p>
      <div className={styles.info}>
        <span>{name}</span>
        <span>{occupation}</span>
      </div>
    </div>
  )
}

export default Testimonial
