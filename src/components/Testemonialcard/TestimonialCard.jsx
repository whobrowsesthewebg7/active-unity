import styles from "./TestimonialCard.module.css";
import { BASENAME } from "../../constant";

const TestimonialCard = ({ name, image, date, statement }) => {
  return (
    <>
      <figure className={styles.testimonial__card} role="blockquote">
        <img
          src={`${BASENAME}${image}`}
          className={styles.testimonial__picture}
          alt={name}
          role="img"
        />
        <figcaption className={styles.testimonial__who}>
          <cite className={styles.testimonial__name}>{name}</cite>
          <time className={styles.testimonial__date}>{date}</time>
        </figcaption>
        <p className={styles.testimonial__statement}>{statement}</p>
      </figure>

      {/* <figure className={styles.testimonial__card} role="blockquote">
<img
  src={`${BASENAME}${image}`}
  className={styles.testimonial__picture}
  alt={name}
  role="img"
/>
<figcaption className={styles.testimonial__who}>
  <cite className={styles.testimonial__name}>{name}</cite>
  <time className={styles.testimonial__date}>{date}</time>
</figcaption>
<p className={styles.testimonial__statement}>{statement}</p>
</figure> */}
    </>
  );
};

export default TestimonialCard;
