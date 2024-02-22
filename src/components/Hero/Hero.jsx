import { useState } from "react";
import styles from "./Hero.module.css";
import Popup from "../Popup";
import { BASENAME } from "../../constant";

const Hero = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className={styles.parent}>
      <video className={styles.video} autoPlay muted loop>
        <source
          src={`${BASENAME}/video/welcome_to_stockholm.mp4`}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <section className={styles.content}>
        <h2 className={styles.subtitle}>Embrace Fun:</h2>
        <h1 className={styles.title}>Your Guide to Stockholm Activities</h1>
        <p className={styles.paragraph}>
          Explore Stockholm's vibrant activities with us! Your go-to guide for
          fun-filled adventures, cultural delights, and memorable experiences
          awaits. Embrace the joy of the city!
        </p>
        <button className={styles.button} onClick={openPopup} aria-label="Open popup">
          Subscribe
        </button>
      </section>
      {isPopupOpen && <Popup closePopup={closePopup} />}
    </div>
  );
};

export default Hero;
