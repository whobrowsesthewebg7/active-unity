import { useContext } from "react";
import styles from './TestemonialCard.module.css';

const TestTestemonialCard = () => {
  return (
    <>
      <div className={styles.testemonial-wrapper}>
        <section className="testemonial-title">
          <h2 className={styles.testemonial-title.text}>See to what others have said</h2>
          <div className="testemonialcards-wrapper">
            <div className="card-wrapper">
              <div className="testemonial-card">
                <div className="testemonial-card-picture-wrapper">
                  <img
                    src="https://images.unsplash.com/photo-1609220136736-443140cffec6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="testemonial-card-picture"/>
                  </div>
                <div className="testemonial-card-text">
                  <h5 className="testemonial-card-text-name">Halley Frank</h5>
                  <h6 className="testemonial-card-text-work">
                    Marketing Specialist
                  </h6>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium accusamus voluptatum deleniti
                    atque corrupti.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default TestTestemonialCard;
