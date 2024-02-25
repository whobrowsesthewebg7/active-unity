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
        <h4>{title}</h4>
        <h5>{category}</h5>
      </div>
    </div>
  );
};

export default Activity;