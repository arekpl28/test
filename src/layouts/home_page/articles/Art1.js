import React from "react";
import Balsfjord from "../../../images/Balsfjord.jpg";

const Art1 = props => {
  return (
    <div
      className="balsfjord co"
      style={{
        left: `${props.scrollLeft}`
      }}
    >
      <div className="art">
        <img src={Balsfjord} alt="" />
        <div className="text">
          Balsfjord kommune har brukt Norkart sin løsning for automatisering av
          meglerinformasjon siden juli 2017. Vi leverer nå våre meglerpakker
          gjennom både Norkart sin løsning og Ambita Infoland, og er svært
          fornøyd med løsninga. Vi sparer masse tid og det har effektivisert vår
          arbeidsdag betraktelig, da de fleste rapportene hentes automatisk.
          <br />
          <br />
          Ettersom vi også har digitalisert vårt byggesaksarkiv trenger vi ikke
          lenger å forlate kontorplassen og «springe huset rundt» for å samle de
          nødvendige opplysningene. Det hele er gjort på ca. 10 minutter. Vi
          opplever også at meglerne er svært fornøyde med løsninga da de får
          raskt svar, og vi er ikke lenger avhengig av enkeltpersoner.
          Opplysningene hentes direkte fra våre fagsystemer, og det gjør at
          feilkildene er minimale.
        </div>
        <div className="author-infobox">
          <p className="author-name">
            <em>Therese Pettersen</em>
          </p>
          <p className="role">
            <em>Servicetorg/arkivleder</em>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Art1;
