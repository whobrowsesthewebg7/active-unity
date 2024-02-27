import React, { useState, useEffect } from 'react';
import TestemonialCard from "../Testemonialcard/TestemonialCard";
import styles from "./Testemonials.module.css";
import useActiveUnity from '../../hooks/useActiveUnity';

const Testemonials = () => {
  const { getTestimonials } = useActiveUnity();
  const testemonialFromDB = getTestimonials();
  const [isMobileView, setIsMobileView] = useState(false);
  const [isTabletView, setIsTabletView] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobileView(window.innerWidth < 768);
      setIsTabletView(window.innerWidth > 768 && window.innerWidth < 1280)
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
    } else if (isTabletView){
      return testemonialFromDB.slice(0, 3).map((testemonial, index) => (
        <TestemonialCard
          key={index}
          name={testemonial.name}
          image={testemonial.image}
          date={testemonial.date}
          statement={testemonial.statement}
        />
      ));
      
    }
    else {
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
    <section className={styles.testemonial_wrapper}>
        <h2 className={styles.testemonial_title_text}>
          See what others have said
        </h2>
      <div className={styles.testemonialcards_wrapper}>
      {renderTestemonialCards()}
      </div>
    </section>      
  );
};

export default Testemonials;