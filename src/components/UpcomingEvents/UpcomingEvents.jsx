import styles from "./UpcomingEvents.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import useActiveUnity from "../../hooks/useActiveUnity";
import Event from "./Event.jsx";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

const UpcomingEvents = () => {
  const { getUpcomingEvents } = useActiveUnity();
  const [upcomingEvents] = useState(() => getUpcomingEvents(20));
  const [castSliderId] = useState(
    `slider-${Math.random().toString(36).substring(7)}`
  );

  const slideLeft = (sliderId) => {
    const slider = document.getElementById(sliderId);
    if (slider) {
      slider.scrollLeft -= 500; // You can adjust the sliding distance
    }
  };

  const slideRight = (sliderId) => {
    const slider = document.getElementById(sliderId);
    if (slider) {
      slider.scrollLeft += 500; // You can adjust the sliding distance
    }
  };

  return (
    <section className={styles.upcoming_events}>
      <h3>Upcoming Events</h3>
      <IoIosArrowDropleftCircle
          onClick={() => {
            slideLeft(castSliderId);
          }}
          className={styles.upcoming_events__slider_left}
          size={60}
        />
      <div className={styles.upcoming_events__container} id={castSliderId}>
        {upcomingEvents.map((event, index) => {
          const { id } = event;
          return (
            <Link key={id} to={`./event/${id}`}>
              <Event event={event} posterView={index === 0 ? true : false} />
            </Link>
          );
        })}
      </div>
      <IoIosArrowDroprightCircle
          onClick={() => {
            slideRight(castSliderId);
          }}
          className={styles.upcoming_events__slider_right}
          size={60}
        />
    </section>
  );
};

export default UpcomingEvents;
