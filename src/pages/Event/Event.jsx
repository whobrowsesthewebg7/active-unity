import { useEffect, useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import moment from "moment";
import styles from "./Event.module.css";
import useActiveUnity from "../../hooks/useActiveUnity";
import { BASENAME } from "../../constant";
import { IoShareSocial } from "react-icons/io5";
import { TbPointFilled } from "react-icons/tb";
import PopupLink from "../../components/Popup/PopupLink";

const Event = () => {
  const { getEventByID } = useActiveUnity();
  const [event, setEvent] = useState([]);
  const [buttonSaveName, setButtonSaveName] = useState("Save");
  const [isLinkPopupOpen, setIsLinkPopupOpen] = useState(false);

  const { id } = useParams();
  const { pathname } = useLocation();

  const handleSaveButton = () => {
    setButtonSaveName(buttonSaveName === "Save" ? "Saved" : "Save");
  };

  const handleLinkButton = () => {
    setIsLinkPopupOpen(true);
  };

  const closePopup = () => {
    setIsLinkPopupOpen(false);
  };

  useEffect(() => {
    if (!id) {
      return;
    } else {
      const eventFromDB = getEventByID(id);
      setEvent(eventFromDB);
    }
  }, [id, getEventByID]);

  return (
    <main className={styles.parent}>
      <p className=" text-sm">
        <Link to="/" className=" underline">
          Home
        </Link>{" "}
        / {event.title}
      </p>
      <div className={styles.container}>
        <div className={styles.image_container}>
          <img
            className={styles.image}
            alt="event image"
            src={`${BASENAME}${event.poster}`}
          ></img>
        </div>
        <section className={styles.info}>
          <div className={styles.date}>
            <p>{moment(event.start_date).format("DD MMM")}</p>
            <TbPointFilled className={styles.iconPoint} />
            <p>{event.start_time}</p>
            <p>-</p>
            <p>{event.end_time}</p>
          </div>
          <h1 className={styles.title}>{event.title}</h1>
          <h2 className={styles.type}>{event.category}</h2>
          <div className={styles.buttons}>
            <IoShareSocial
              className={styles.shareButton}
              aria-label="copy link button"
              onClick={handleLinkButton}
            />
            <button
              className={styles.saveButton}
              aria-label="save event button"
              onClick={handleSaveButton}
            >
              {buttonSaveName}
            </button>
          </div>
          <p className={styles.discription}>{event.description}</p>
        </section>
      </div>
      {isLinkPopupOpen && (
        <PopupLink closePopup={closePopup} pathname={pathname} />
      )}
    </main>
  );
};

export default Event;
