import classes from "./Activity.module.css";

import { BASENAME } from "../../constant";

const Activity = ({ activity, posterView = false }) => {
  const { title, category, poster, thumbnail, thumbnail_mob } = activity;
  return (
    <div className={classes.activity}>
      {/* <img
        className={classes.activity__image}
        src={`${BASENAME}${thumbnail}`}
        alt={title}
      ></img> */}
      <picture className={classes.activity__image}>
        <source
          media="(max-width: 400px)"
          srcSet={`${BASENAME}${thumbnail_mob}`}
        />
        <source media="(min-width: 400px)" srcSet={`${BASENAME}${thumbnail}`} />
        <img
          src={`${BASENAME}${thumbnail_mob}`}
          alt={title}
          style={{ width: "auto" }}
        />
      </picture>
      <div className={classes.activity__mask}>
        <p className={classes.activity__title}>{title}</p>
        <p className={classes.activity__category}>{category}</p>
      </div>
    </div>
  );
};

export default Activity;
