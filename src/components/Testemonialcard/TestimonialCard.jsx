import styles from "./TestimonialCard.module.css";
import { BASENAME } from "../../constant";

const TestimonialCard = ({ name, image, date, statement }) => {
  return (
    <div className={styles.testimonial__card} role="blockquote">
      <figure>
        <img
          src={`${BASENAME}${image}`}
          className={styles.testimonial__picture}
          alt={name}
          role="img"
        />
      </figure>
      <div className={styles.testimonial__who}>
        <cite className={styles.testimonial__name}>{name}</cite>
        <p className={styles.testimonial__date}>{date}</p>
      </div>
      <p className={styles.testimonial__statement}>{statement}</p>
    </div>
  );
};

export default TestimonialCard;
