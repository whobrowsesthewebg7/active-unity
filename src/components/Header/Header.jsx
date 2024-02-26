import styles from "./Header.module.css";
import { BASENAME } from "../../constant";

const Header = () => {
  return (
    <header className={styles.parent}>
      <img
        className={styles.image}
        src={`${BASENAME}/images/logo-horz.svg`}
        alt="Logo"
      ></img>
    </header>
  );
};

export default Header;
