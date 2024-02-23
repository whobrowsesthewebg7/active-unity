import { useState } from "react";
import styles from "./Subscription.module.css";
import Popup from "../Popup";
import { BASENAME } from "../../constant";

const Subscription = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className={styles.container}>
      
        <img
          className={styles.image}
          src={`${BASENAME}/images/activities/attend-a-live-music-performance-or-dance-the-night-away-in-a-stylish-club.webp`}
          ></img>
          <section className={styles.content}>
        <h2 className={styles.title}>Sign up for our newsletter</h2>
        <p className={styles.paragraph}>
          Stay up to date with the roadmap progress, announcements and exclusive
          discounts feel free to sign up with your email!
        </p>
        <button className={styles.button} onClick={openPopup} aria-label="Open popup">
          Subscribe
        </button>
      </section>
      {isPopupOpen && <Popup closePopup={closePopup} />}
    </div>
  );
};

export default Subscription;
