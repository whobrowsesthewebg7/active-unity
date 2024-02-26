import styles from './TestemonialCard.module.css';
import { BASENAME } from "../../constant";

const TestemonialCard = ({ name, image, date, statement }) => {
  return (
    <>
      <div className={styles.testemonialcards_wrapper}>
            <div className={styles.card_wrapper}>
              <div className={styles.testemonial_card}>
                <div className={styles.testemonial_card_picture_wrapper}>
                <img src={`${BASENAME}${image}`} className={styles.testemonial_card_picture}/>
                  </div>
                <div className={styles.testemonial_card_text}>
                  <h5 className={styles.testemonial_card_text_thename}>{name}</h5>
                  <h6 className={styles.testemonial_card_text_date}>
                    {date}
                  </h6>
                  <p>
                    {statement}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
  );
}

export default TestemonialCard;
