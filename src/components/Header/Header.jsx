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
          width="16rem"
          height="4.856875rem"
        ></img>
      </Link>
    </header>
  );
};

export default Header;
