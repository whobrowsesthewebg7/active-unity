import classes from "./Activity.module.css";

import { BASENAME } from "../../constant";

const Activity = ({ activity, posterView = false }) => {
  const { title, category, poster, thumbnail } = activity;
  return (
    <div className={classes.activity}>
      <img
        className={classes.activity__image}
        src={`${BASENAME}${thumbnail}`}
        alt={title}
      ></img>
      <div className={classes.activity__mask}>
        <p className={classes.activity__title}>{title}</p>
        <p className={classes.activity__category}>{category}</p>
      </div>
    </div>
  );
};

export default Activity;
