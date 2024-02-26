// import style from "./Home.module.css";
import { useEffect } from "react";
import Hero from "../../components/Hero";
import Subscription from "../../components/Subscription";
import useActiveUnity from "../../hooks/useActiveUnity";
import FeaturedActivities from "../../components/FeaturedActivities";
import Categories from "../../components/Categories";
import UpcomingEvents from "../../components/UpcomingEvents";
import Testemonials from "../../components/Testemonials/Testemonials";

const Home = () => {
  const {
    getFeaturedActivities,
    getUpcomingEvents,
    getCategories,
    getTestimonials,
    getEventByID,
  } = useActiveUnity();

  useEffect(() => {
    const featuredActivities = getFeaturedActivities();
    const upcomingEvents = getUpcomingEvents(3);
    const categories = getCategories();
    const testimonials = getTestimonials();
    const event = getEventByID(3);
    console.log({
      featuredActivities,
      upcomingEvents,
      categories,
      testimonials,
      event,
    });
  }, []);

  return (
    <>
      <Hero />
      <FeaturedActivities />
      <Categories />
      <UpcomingEvents />
      <Subscription />
      <Testemonials />
    </>
  );
};

export default Home;
