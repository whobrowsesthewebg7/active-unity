import styles from "./TestimonialCard.module.css";
import { BASENAME } from "../../constant";

const TestimonialCard = ({ name, image, date, statement }) => {
  return (
    <div className={styles.testimonial__card}>
      <img
        src={`${BASENAME}${image}`}
        className={styles.testimonial__picture}
        alt={name}
      />
      <div className={styles.testimonial__who}>
        <p className={styles.testimonial__name} role="name">
          {name}
        </p>
        <p className={styles.testimonial__date} role="date">
          {date}
        </p>
      </div>
      <p className={styles.testimonial__statement}>{statement}</p>
    </div>
  );
};

export default TestimonialCard;
