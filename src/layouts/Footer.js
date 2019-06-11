import React from "react";

import logowhite from "../images/logowhite.png";

const Footer = () => {
  return (
    <>
      <div className="logo">
        <div className="image">
          <img src={logowhite} alt="" />
        </div>
        <div className="policy">
          <p>&copy; 2019 Norkart AS. All Rights Reserved. Privacy Policy.</p>
        </div>
        <div className="media">
          <i className="fab fa-twitter" />
          <i className="fab fa-facebook-f" />
          <i className="fab fa-instagram" />
          <i className="fab fa-youtube" />
          <i className="fab fa-linkedin" />
        </div>
      </div>
      <div className="contact">
        <h1>Kontakt</h1>
        <div className="info">
          <div className="tel">
            <i className="fas fa-phone" />
            <p className="day">
              Norkart kundestøtte: 67 48 38 88 <span>(08:30 – 15:30)</span>
            </p>
          </div>
          <div className="email">
            <i className="far fa-envelope" />
            <p className="mail">info@norkart.no</p>
          </div>
          <div className="page">
            <p className="teamviver">TeamViewer</p>
            <p className="kontor">Se våre kontorer</p>
          </div>
        </div>
      </div>
      <div className="last">
        <div className="org">
          <i className="fas fa-phone" />
          <p>
            iNorkart resepsjon: 67 55 14 00 <span>(08:00-16:00)</span>
          </p>
        </div>
        <p>Organisasjonsnummer: NO 934 161 181</p>
      </div>
    </>
  );
};

export default Footer;
