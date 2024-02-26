import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./FeaturedActivities.module.css";
import useActiveUnity from "../../hooks/useActiveUnity";
import Activity from "./Activity";

const FeaturedActivities = () => {
  const { getFeaturedActivities } = useActiveUnity();
  const [featuredActivities] = useState(() => getFeaturedActivities());

  return (
    <section className={style.featured_activities}>
      <h2>Featured Activities</h2>
      <div className={style.featured_activities__container}>
        {featuredActivities.map((activity, index) => {
          const { id } = activity;
          return (
            <Link
              key={id}
              to={`./activity/${id}`}
              className={style.featured_activities__event}
            >
              <Activity
                activity={activity}
                posterView={index === 0 ? true : false}
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturedActivities;
