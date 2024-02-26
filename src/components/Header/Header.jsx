import { Link } from "react-router-dom";

import styles from "./Header.module.css";

import { BASENAME } from "../../constant";

const Header = () => {
  return (
    <header className={styles.parent}>
      <Link to="./">
        <img
          className={styles.logo}
          src={`${BASENAME}/images/logo-horz.svg`}
          alt="Logo"
        ></img>
      </Link>
    </header>
  );
};

export default Header;
