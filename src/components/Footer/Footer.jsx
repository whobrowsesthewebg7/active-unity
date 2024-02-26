import React from "react";
import style from "./Footer.module.css";
import footer_logo from "../../assets/images/logo-vert.svg";

const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          <img src={footer_logo} alt="Active Unity Logo" />
        </div>
      </div>
      <div></div>
      <div></div>
    </footer>
  );
};

export default Footer;
