import React from 'react';
import styles from './Popup.module.css';
import { CiCircleRemove } from 'react-icons/ci';
import { useForm } from 'react-hook-form';

const Popup = ({ closePopup }) => {
  const handleOnClose = (e) => {
    if (e.target.id === 'parent') closePopup();
  };

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = () => {
    console.log(setError);
    reset();
    closePopup();
  };

  return (
    <div className={styles.parent} id="parent" onClick={handleOnClose}>
      <div className={styles.container}>
        <CiCircleRemove className={styles.closeButton} onClick={closePopup} aria-label="Close popup" />
        <p3 className={styles.title}>Subscribe to our events</p3>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <input
            className={styles.input}
            placeholder="enter your email"
            type="text"
            {...register('email', {
              required: {
                value: true,
                message: 'Please enter your email',
              },
              minLength: {
                value: 3,
                message: 'Minimum length is 3',
              },
              maxLength: {
                value: 40,
                message: 'Maximum length is 40',
              },
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: 'Please enter a valid email',
              },
            })}
          />
          <button className={styles.confirmButton} aria-label="Sent email">
            Subscribe now
          </button>
        </form>
        {errors?.email && <div className={styles.error}>{errors.email.message}</div>}
      </div>
    </div>
  );
};

export default Popup;
