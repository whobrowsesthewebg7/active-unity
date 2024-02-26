import classes from "./Activity.module.css";

import { BASENAME } from "../../constant";

const Activity = ({ activity, posterView = false }) => {
  const { title, category, poster, thumbnail } = activity;
  return (
    <div className={classes.activity}>
      <img
        className={classes.activity__image}
        src={`${BASENAME}${posterView ? poster : thumbnail}`}
        alt={title}
      ></img>
      <div className={classes.activity__mask}>
        <h3>{title}</h3>
        <h4>{category}</h4>
      </div>
    </div>
  );
};

export default Activity;
