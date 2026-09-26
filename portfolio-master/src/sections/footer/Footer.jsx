import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container footer_container">
        <p>{new Date().getFullYear()} &copy; All Rights Reserved</p>{" "}
      </div>
    </footer>
  );
};

export default Footer;
