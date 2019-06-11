import React from "react";
import Nittedal from "../../../images/Nittedal.png";

const Art3 = props => {
  return (
    <div
      className="balsfjord co"
      style={{
        left: `${props.scrollLeft}`
      }}
    >
      <div className="art">
        <img src={Nittedal} alt="" />
        <div className="text">
          <p>
            Nittedal kommune leverer «meglerpakke» til både Norkart og Infoland
            (Ambita) sine løsninger. Vi tok i bruk automatisk produksjon fra
            Norkart for begge løsningene 2.januar 2017.
          </p>
          <p>
            Automatikken fungerer veldig bra og er svært tidsbesparende. Vi er
            da også færre som bruker tid på å produsere opplysninger. Den gjør
            også at feilkildene er minimale og at en sikrer at det er
            opplysningene som er registrert som blir hentet. Dette gjør oss mer
            effektive og at de opplysningene som går automatisk kan sluttføres
            og ekspederes raskere.
          </p>
        </div>
        <div className="author-infobox">
          <p className="author-name">
            <em>Dag Wågen</em>
          </p>
          <p className="role">
            <em>Avdelingsingeniør</em>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Art3;
