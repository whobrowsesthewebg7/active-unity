import styles from './Popup.module.css';
import { CiCircleRemove } from 'react-icons/ci';
import { BASENAME } from '../../constant';
import { useState } from 'react';


const PopupLink = ({ closePopup, pathname }) => {
  const [inputValue, setInputValue] = useState(`${BASENAME}${pathname}`);

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  }

  const handleOnClose = (e) => {
    if (e.target.id === 'parent') closePopup();
  };

  return (
    <div className={styles.parent} id="parent" onClick={handleOnClose}>
      <div className={styles.container}>
        <CiCircleRemove className={styles.closeButton} onClick={closePopup} aria-label="Close popup" />
        <p3 className={styles.title}>Share</p3>
        <form className={styles.form}>
          <input
            className={`${styles.input} ${styles.inputBold}`}
            type="text"
            value={inputValue}
            onChange={handleInputValue}
          />
          <button className={styles.copyButton} aria-label="Copy link">
            Copy Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupLink;
