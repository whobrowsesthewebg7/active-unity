import React from "react";
import style from "./Footer.module.css";
import footer_logo from "../../assets/images/logo-vert.svg";
import youtube from "../../assets/images/youtube.svg";
import facebook from "../../assets/images/facebook.svg";
import instgram from "../../assets/images/instgram.svg";
import { MdLocationCity, MdAlternateEmail, MdLocalPhone } from "react-icons/md";

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
            <MdLocationCity size={30} />
            <p>
              <span>Active Unity AB</span>
              <span>Fleminggatan 4</span>
              <span>SE-112 26 Stockholm</span>
            </p>
          </div>
          <div className={style.contact_address}>
            <div className={style.contact_phone}>
              <MdLocalPhone size={30} />
              <a href="tel:+46 8-508 285 08">+46 8-508 285 08</a>
            </div>
          </div>
          <div className={style.contact_address}>
            <div className={style.contact_email}>
              <MdAlternateEmail size={25} />
              <a href="mailto:touristinfo@stockholm.se">
                touristinfo@stockholm.se
              </a>
            </div>
          </div>
          <div className={style.social__media}>
            <a href="https://www.youtube.com" role="button">
              <img src={youtube} alt="Youtube" />
            </a>
            <a href="https://www.facebook.com" role="button">
              <img src={facebook} alt="Facebook" />
            </a>
            <a href="https://www.instgram.com" role="button">
              <img src={instgram} alt="Instgram" />
            </a>
          </div>
        </div>
        <div className={style.footer__col_short}>
          <form action="#" role="form">
            <div>
              <label
                for="name"
                className="block mb-2 text-sm font-medium text-white"
              >
                Your name:
              </label>
              <input id="name" type="text" className={style.input_field} />
            </div>
            <div>
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-white"
              >
                Your email:
              </label>
              <input
                type="email"
                id="email"
                className={style.input_field}
              />
            </div>
            <div class="sm:col-span-2">
              <label
                for="message"
                className="block mb-2 text-sm font-medium text-white"
              >
                Your message:
              </label>
              <textarea
                id="message"
                rows="6"
                className={style.textarea_field}
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
