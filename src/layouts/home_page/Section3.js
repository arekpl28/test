import React from "react";
import { NavLink } from "react-router-dom";

const coursesList = [
  {
    name: "Kartpresentasjon – merk: ny dato",
    date: "28. mai",
    city: "Bergen",
    type: "Kurs",
    path: "#"
  },
  {
    name: "Norgesmesterskap for eiendomsbransjen 2019",
    date: "12. juni",
    city: "Oslo",
    type: "Kurs",
    path: "#"
  },
  {
    name: "Norkart Tjenestepanel – ditt verktøy for kart på nett",
    date: "13. juni",
    city: "WEBKURS",
    type: "Kurs",
    path: "#"
  },
  {
    name: "Etablering av ledningsnett",
    date: "03-04 september",
    city: "Bergen",
    type: "Kurs",
    path: "#"
  },
  {
    name: "VA-måledata fra entreprenør",
    date: "05-06 september",
    city: "Bergen",
    type: "Kurs",
    path: "#"
  },
  {
    name: "Norkart Tjenestepanel – ditt verktøy for kart på nett",
    date: "05. september",
    city: "WEBKURS",
    type: "Kurs",
    path: "#"
  }
];

const Section3 = () => {
  const courses = coursesList.map((course, index) => (
    <div key={index}>
      <NavLink to={course.path}>{course.name}</NavLink>
      <div className="wrapper">
        <p>Dato:</p>
        <p>{course.date}</p>
        <p>Sted:</p>
        <p>{course.city}</p>
        <p>Kurstype: </p>
        <p>{course.type}</p>
        <button>Les mer</button>
      </div>
    </div>
  ));
  return (
    <>
      <article className="section3">
        <h3>Delta på kurs hos oss</h3>
        <div className="cours">
          <button className="all">Se alle kurs</button>
          {courses}
        </div>
      </article>
    </>
  );
};

export default Section3;
