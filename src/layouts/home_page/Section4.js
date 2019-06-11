import React from "react";
import { NavLink } from "react-router-dom";

import kvinner from "../../images/kvinner.jpg";
import utvilker from "../../images/utvikler.jpg";

const jobsList = [
  {
    title: "Slik rekrutterer Norkart flere kvinner",
    text: "Vi ønsker både mannlige og kvinnelige utviklere!",
    image: kvinner,
    path: "/"
  },
  {
    title: "Vi søker utviklere",
    text: `I Norkart er du med å automatisere Norge – ikke i teorien – men i virkeligheten.
          Vil du bli med i teamet vårt? Send oss en melding så tar vi kontakt.`,
    image: utvilker,
    path: "/"
  }
];

const Section4 = () => {
  const jobs = jobsList.map((job, index) => (
    <div className="job" key={index}>
      <NavLink to={job.path}>
        <div className="image">
          <img src={job.image} alt="folk" />
        </div>
        <h4>{job.title}</h4>
      </NavLink>
      <p>{job.text}</p>
    </div>
  ));
  return (
    <>
      <article className="section4">
        <h3>Ledige stillinger – Bli med å digitalisere Norge</h3>
        <button>Les mer om å jobbe i Norkart</button>
        {jobs}
      </article>
    </>
  );
};

export default Section4;
