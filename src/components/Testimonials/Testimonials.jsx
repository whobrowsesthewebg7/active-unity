import { useState, useEffect } from "react";
import TestimonialCard from "../Testemonialcard";
import styles from "./Testimonials.module.css";
import useActiveUnity from "../../hooks/useActiveUnity";

const Testimonials = () => {
  const { getTestimonials } = useActiveUnity();
  const testimonialFromDB = getTestimonials();
  const [isMobileView, setIsMobileView] = useState(false);
  const [isTabletView, setIsTabletView] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobileView(window.innerWidth < 768);
      setIsTabletView(window.innerWidth > 768 && window.innerWidth < 1280);
    };

    checkScreenWidth();

    window.addEventListener("resize", checkScreenWidth);

    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);

  function getRandomNumber() {
    return Math.floor(Math.random() * 5); // Generates a random integer between 0 and 4
  }
  const randomnumber = getRandomNumber();

  const renderTestimonialCards = () => {
    if (isMobileView) {
      const testimonial = testimonialFromDB[randomnumber];
      return <TestimonialCard {...testimonial} />;
    } else if (isTabletView) {
      return testimonialFromDB
        .slice(0, 3)
        .map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ));
    } else {
      return testimonialFromDB.map((testimonial, index) => (
        <TestimonialCard key={index} {...testimonial} />
      ));
    }
  };

  return (
    <section className={styles.testemonial_wrapper}>
      <h2 className={styles.testemonial_title_text}>
        See what others have said
      </h2>
      <div className={styles.testemonialcards_wrapper}>
        {renderTestimonialCards()}
      </div>
    </section>
  );
};

export default Testimonials;
