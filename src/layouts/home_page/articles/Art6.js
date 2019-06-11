import React from "react";
import Vestfold from "../../../images/Vestfold.png";

const Art6 = props => {
  return (
    <div
      className="ordal co"
      style={{
        left: `${props.scrollLeft}`
      }}
    >
      <div className="art">
        <img src={Vestfold} alt="" />
        <div className="text">
          <p>
            Norkart har bistått Vestfold fylkeskommune med å fremskaffe komplett
            oversikt over eiendommer knyttet til fylkesveier i Vestfold.
          </p>
          <p>
            Analysen består av ca 1600 eiendommer. Eiendommene er både festet,
            eiet, matrikulert, ikke matrikulert, består av flere teiger – med og
            uten riktig kontaktinstans (KE).
          </p>
          <p>
            Analysene ble systematisert slik at de kan sorteres og visualiseres
            utfra de ulike forutsetningene.
          </p>
          <p>
            Formålet med analysen var å skaffe fullstendig oversikt over
            eiendommene både som grunnlag for orientering av politikerne,
            grunnlag for riktig registrering av eier og som grunnlag for
            utvelgelse av eiendommer for avhending.
          </p>
          <p>
            Norkart har løst oppdraget kompetent og fleksibelt og gitt
            fylkeskommunen som eier et godt verktøy for analyse og en god
            oversikt over egne eiendommer til vegformål. Analyseresultatet
            benyttes som et effektivt verktøy for god samhandling med Statens
            vegvesen ved forvaltning av eiendommene. Analysen avdekker feil og
            mangler ved registreringen av eiendommene som nå ryddes opp i.
          </p>
          <p>Vi takker Norkart for godt smarbeid!</p>
        </div>
        <div className="author-infobox">
          <p className="author-name">
            <em>Øyvind Trygstad</em>
          </p>
          <p className="role">
            <em>rådgiver</em>
            <em>Eiendomsseksjonen/ Stabsavdelingen</em>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Art6;
