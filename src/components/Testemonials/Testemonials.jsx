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

  
  const renderTestemonialCards = () => {
    if (isMobileView) {
      return (
        <TestemonialCard
          name={testemonialFromDB[0].name}
          image={testemonialFromDB[0].image}
          date={testemonialFromDB[0].date}
          statement={testemonialFromDB[0].statement}
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

