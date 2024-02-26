import styles from './TestemonialCard.module.css';

const TestemonialCard = ({ wrapper, name, image, date, statement }) => {
  const testimage = "https://images.unsplash.com/photo-1609220136736-443140cffec6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <>
      <div className={styles.testemonialcards_wrapper}>
            <div className={styles.card_wrapper}>
              <div className={styles.testemonial_card}>
                <div className={styles.testemonial_card_picture_wrapper}>
                  <img src={image} className={styles.testemonial_card_picture}/>
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

/* I'm thinking that the card would import the testemonials from the json 
then
check how many there is.
then 
display cards depending on how big the screen is. 
maybe even a "slider"? 
 */
