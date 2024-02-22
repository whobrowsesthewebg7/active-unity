// import style from "./Home.module.css";
import { useEffect } from "react";
import Hero from "../../components/Hero";
import useActiveUnity from "../../hooks/useActiveUnity";

const Home = () => {
  const {
    getFeaturedActivities,
    getUpcomingEvents,
    getCategories,
    getTestimonials,
    getEventByID,
  } = useActiveUnity();

  useEffect(() => {
    const events = getFeaturedActivities();
    const upcomingEvents = getUpcomingEvents(3);
    const categories = getCategories();
    const testimonials = getTestimonials();
    const event = getEventByID(3);
    console.log({ events, upcomingEvents, categories, testimonials, event });
  }, []);

  return (
    <>
      Landing Page
      <Hero />
    </>
  );
};

export default Home;
