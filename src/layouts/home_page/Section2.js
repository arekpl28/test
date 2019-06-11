import React from "react";

import greeLine from "../../images/greenline.png";
import iconkommune from "../../images/iconkommune.png";
import logo from "../../images/logo.png";

const Section2 = () => {
  return (
    <>
      <article className="section2">
        <div className="wraper">
          <div className="digitale">
            <h3>Den Digitale Kommune 2019</h3>
            <p>
              100 millioner kroner investeres i a digitalisere kommune-Norge
              sammen med utvalgte samarbeidspartnere.
            </p>
          </div>
          <div className="green-line">
            <img src={greeLine} alt={"grenn line"} />
          </div>
          <div className="icon-kommune">
            <img src={iconkommune} alt={"icon kommune"} />
          </div>
          <div className="green-line">
            <img src={greeLine} alt={"green line"} />
          </div>
          <div className="les-mer">
            <div>
              <img src={logo} alt={""} />
              <button>Les mer</button>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Section2;
