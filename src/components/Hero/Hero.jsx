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
    <section className={styles.parent}>
      <video className={styles.video} autoPlay muted loop disableRemotePlayback>
        <source
          src={`${BASENAME}/video/welcome_to_stockholm.webm`}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>


      <div className={styles.content}>
        <div className={styles.container}>
          <h1 className={styles.subtitle}>
            Embrace Fun:
            <span className={styles.title}>
              Your Guide to Stockholm Activities
            </span>
          </h1>
          <p className={styles.paragraph}>
            {`Explore Stockholm's vibrant activities with us! Your go-to guide for
            fun-filled adventures, cultural delights, and memorable experiences
            awaits. Embrace the joy of the city!`}
          </p>
          <button
            className={styles.button}
            onClick={openPopup}
            aria-label="Open popup"
          >
            Subscribe
          </button>
        </div>

      </div>
      {isPopupOpen && <Popup closePopup={closePopup} />}
    </section>
  );
};

export default Hero;
