import React, { useState, useEffect } from 'react';
import TestemonialCard from "../Testemonialcard/TestemonialCard";
import styles from "./Testemonials.module.css";
import useActiveUnity from '../../hooks/useActiveUnity';

const Testemonials = () => {
  const { getTestimonials } = useActiveUnity();
  const testemonialFromDB = getTestimonials();
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    checkScreenWidth();

    window.addEventListener('resize', checkScreenWidth);

    return () => {
      window.removeEventListener('resize', checkScreenWidth);
    };
  }, []);

  function getRandomNumber() {
    return Math.floor(Math.random() * 5); // Generates a random integer between 0 and 4
  }
  const randomnumber = getRandomNumber();

  const renderTestemonialCards = () => {
    if (isMobileView) {
      return (
        <TestemonialCard
          name={testemonialFromDB[randomnumber].name}
          image={testemonialFromDB[randomnumber].image}
          date={testemonialFromDB[randomnumber].date}
          statement={testemonialFromDB[randomnumber].statement}
        />
      );
    } else {
      return testemonialFromDB.map((testemonial, index) => (
        <TestemonialCard
          key={index}
          name={testemonial.name}
          image={testemonial.image}
          date={testemonial.date}
          statement={testemonial.statement}
        />
      ));
    }
  };

  return (
    <div className={styles.testemonial_wrapper}>
        <h1 className={styles.testemonial_title_text}>
          See what others have said
        </h1>
      <div className={styles.testemonialcards_wrapper}>
      {renderTestemonialCards()}
      </div>
    </div>      
  );
};

export default Testemonials;





/* 
create array from import testemonials from json
for each name create a card
send name, image, date, statement as parameters */



/* const testemonialFromDB = getTestimonials

const eventFromDB = getEventByID(id)


<div className={styles.testemonial_wrapper}>
        {testemonialFromDB.map(testemonial.name, index) => (
          <TestemonialCard key={index} />
        ))}
      </div>



        useEffect(() => {
    if (!id) {
      return;
    } else {
      const eventFromDB = getEventByID(id);
      setEvent(eventFromDB);
    }
  }, [id]);


*/

 /*  console.log(getTestimonials()); */

/*   useEffect(() => {
    const testemonialFromDB = getTestimonials();
      setEvent(eventFromDB);
  }); */

