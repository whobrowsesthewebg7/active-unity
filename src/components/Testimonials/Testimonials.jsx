import { useState, useEffect } from "react";
import sampleSize from "lodash/fp/sampleSize";
import TestimonialCard from "../Testemonialcard";
import styles from "./Testimonials.module.css";
import useActiveUnity from "../../hooks/useActiveUnity";

const Testimonials = () => {
  const { getTestimonials } = useActiveUnity();
  const [testimonials] = useState(() => getTestimonials());
  const [shuffledTestimonials, setShuffledTestimonials] =
    useState(testimonials);

  useEffect(() => {
    const shuffledTestimonials = sampleSize(testimonials.length)(testimonials);
    setShuffledTestimonials(shuffledTestimonials);
  }, [testimonials]);

  return (
    <section
      className={styles.testimonial_wrapper}
      role="region"
      aria-label="Testimonials Section"
    >
      <h2 className={styles.testimonial_title_text}>
        See what others have said
      </h2>
      <div className={styles.testimonials_wrapper}>
        {shuffledTestimonials.map((testimonial) => {
          const { id } = testimonial;
          return <TestimonialCard key={id} {...testimonial} />;
        })}
      </div>
    </section>
  );
};

export default Testimonials;
