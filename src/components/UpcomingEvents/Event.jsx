import styles from "./Event.module.css";
import { BASENAME } from "../../constant";

const Event = ({ event, posterView = false }) => {
  const { title, poster, thumbnail, start_date } = event;

  return (
    <article className={styles.event} role="article">
      <p className={styles.event__date}>
        <span>
          {new Date(start_date).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
          })}
        </span>
      </p>

      <img
        className={styles.event__image}
        src={`${BASENAME}${thumbnail}`}
        alt={title || "Event Image"}
        role="img"
        aria-label={title || "Event Image"}
      ></img>
      <div className={styles.event__mask}>
        <p>{title}</p>
      </div>
    </article>
  );
};

export default Event;
