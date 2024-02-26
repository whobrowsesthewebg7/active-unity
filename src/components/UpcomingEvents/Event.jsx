import styles from "./Event.module.css";
import { BASENAME } from "../../constant";

const Event = ({ event, posterView = false }) => {
  const { title, poster, thumbnail, start_date } = event;

  return (
    <div className={styles.event}>
      <b className={styles.event__date}>
        {new Date(start_date).toLocaleDateString("en-US", {
          day: "numeric",
          month: "short",
        })}
      </b>
      <img
        className={styles.event__image}
        src={`${BASENAME}${posterView ? poster : thumbnail}`}
        alt={title}
      ></img>
      <div className={styles.event__mask}>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default Event;
