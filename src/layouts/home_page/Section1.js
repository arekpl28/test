import React from "react";
import { NavLink } from "react-router-dom";
import article1 from "../../images/article1.png";
import article2 from "../../images/article2.png";
import article3 from "../../images/article3.png";
import article4 from "../../images/article4.png";
const articleList = [
  {
    name: "Hvordan kan kommunene lykkes...",
    text: "Norkart inviterer til Digitaliseringsseminar for",
    path: "/",
    import: article1
  },
  {
    name: "Vil dere gjøre tiltak på riktig sted før eller etter ...",
    text: "Gjør overvannstiltak på riktig sted Overvann er begrepet ... ",
    path: "/",
    import: article2
  },
  {
    name: "Regionreform 2020 - Får du nytt kommunenu...",
    text:
      "Når kommuner endres eller skifter kommunenummer, vil det føre til endringer i matrikkeldataene. Dette har",
    path: "/",
    import: article3
  },
  {
    name: "Nye KOMTEK Eiendomsskatt i rute",
    text:
      "Nå jobbes det med å videreutvikle og forbedre KOMTEK Eiendomsskatt – og det siste halve året har ",
    path: "/",
    import: article4
  }
];
const Section_1 = () => {
  const article = articleList.map((item, index) => (
    <NavLink key={index} to={item.path}>
      <div className="image">
        <img src={item.import} alt={item.import} />
      </div>
      <h3>{item.name}</h3>
      <p>{item.text}</p>
    </NavLink>
  ));
  return (
    <>
      <article className="section1">
        <div className="aktuelt">
          <h2>Aktuelt</h2>
        </div>
        <div className="article-list">
          <button>Se alle nyheter</button>
          {article}
        </div>
      </article>
    </>
  );
};

export default Section_1;
