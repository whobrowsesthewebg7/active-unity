import React from 'react';
import styles from './Popup.module.css';
import { CiCircleRemove } from 'react-icons/ci';

const Popup = ({closePopup}) => {
  const handleOnClose = (e) => {
    if (e.target.id === 'parent') closePopup();
  };

  return (
    <div className={styles.parent} id="parent" onClick={handleOnClose}>    
      <div className={styles.container}>
      <CiCircleRemove className={styles.closeButton} />
      
        <p3 className={styles.title}>Subscribe to our events</p3>
        <form className={styles.form}>
          <input className={styles.input} placeholder="enter your email" />
          <button className={styles.confirmButton}>Subscribe now</button>
        </form>
      </div>
    </div>
  );
};

export default Popup;
