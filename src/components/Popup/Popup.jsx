import React from 'react';
import styles from './Popup.module.css';

const Popup = ({closePopup}) => {
  const handleOnClose = (e) => {
    if (e === 'parent') closePopup();
  };

  return (
    <div className={styles.parent} id="parent" onClick={handleOnClose}>
      <div className={styles.container}>
        <p3 className={styles.title}>Subscribe to our events</p3>
        <form className={styles.form}>
          <input className={styles.input} placeholder="enter your email" />
          <button className={styles.button}>Subscribe now</button>
        </form>
      </div>
    </div>
  );
};

export default Popup;
