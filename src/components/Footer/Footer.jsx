import React from "react";
import style from "./Footer.module.css";
import footer_logo from "../../assets/images/logo-vert.svg";
import youtube from "../../assets/images/youtube.svg";
import facebook from "../../assets/images/facebook.svg";
import instgram from "../../assets/images/instgram.svg";

const Footer = () => {
  return (
    <footer>
      <div className={style.footer__container}>
        <div className={style.footer__col_long}>
          <div className={style.footer__logo_container}>
            <img src={footer_logo} alt="Active Unity Logo" />
          </div>
          <p className={style.footer__description}>
            ActiveUnity is your ultimate guide to vibrant activities in
            Stockholm. Explore a curated collection of diverse experiences for
            all ages – from family-friendly adventures to thrilling teen
            activities. Our user-friendly platform makes it easy to plan your
            day and discover the best the city has to offer. Embrace the joy of
            Stockholm with ActiveUnity – where fun meets exploration!
          </p>
        </div>
        <div className={style.footer__col_short}>
          <h3 className={style.contact__title}>Contact Information</h3>
          <div className={style.contact_address}>
            <p>Active Unity AB</p>
            <p>Fleminggatan 4</p>
            <p>SE-112 26 Stockholm</p>
          </div>
          <div className={style.contact_address}>
            <p>+46 8-508 285 08</p>
            <p>touristinfo@stockholm.se</p>
          </div>
          <div className={style.social__media}>
            <a href="#">
              <img src={youtube} alt="Youtube" />
            </a>
            <a href="#">
              <img src={facebook} alt="Facebook" />
            </a>
            <a href="#">
              <img src={instgram} alt="Instgram" />
            </a>
          </div>
        </div>
        <div className={style.footer__col_short}>
          <form action="#">
            <div>
              <input className={style.input_field} placeholder="Name" />
            </div>
            <div>
              <input
                type="text"
                id="subject"
                className={style.input_field}
                placeholder="Email"
              />
            </div>
            <div class="sm:col-span-2">
              <textarea
                id="message"
                rows="6"
                className={style.textarea_field}
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button type="submit" className={style.btn}>
              Send message
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
