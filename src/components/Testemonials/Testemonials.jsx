import TestemonialCard from "../Testemonialcard/TestemonialCard";
import styles from "./Testemonials.module.css";

const Testemonials = () => {
  return (
    <>
      <div className={styles.testemonial_wrapper}>
        <section className={styles.testemonial_title}>
          <h2 className={styles.testemonial_title_text}>
            See to what others have said
          </h2>
          <TestemonialCard />
        </section>
      </div>
    </>
  );
};

export default Testemonials;



/* 
create array from import testemonials from json
for each name create a card
send name, image, date, statement as parameters */