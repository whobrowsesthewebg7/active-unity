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
        <h4 className={styles.testimonial__name}>{name}</h4>
        <p className={styles.testimonial__date} role="date">
          {date}
        </p>
      </div>
      <p className={styles.testimonial__statement}>{statement}</p>
    </div>
  );
};

export default TestimonialCard;
