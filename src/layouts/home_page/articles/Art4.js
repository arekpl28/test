import React from "react";
import Alta from "../../../images/Alta.jpg";

const Art4 = props => {
  return (
    <div
      className="alta co"
      style={{
        left: `${props.scrollLeft}`
      }}
    >
      <div className="art">
        <img src={Alta} alt="" />
        <div className="text">
          <p>
            Vi i Alta kommune leverer all informasjon tilknyttet meglerpakker og
            lignende produkter gjennom e-Portal, og hovedtyngden av produktene
            er nå automatisert gjennom Norkarts løsning. ePortal sitt
            brukergrensesnitt, tilrettelagte løsninger og tilpassede
            dokumentmaler er så gode og fleksible at vi bruker portalen også til
            leveranser av manuelle produkter som Legalpant, Målebrev,
            Bygningstegninger og Brukstillatelse og ferdigattest.
          </p>
          <p>
            Norkart og automatiseringsløsningen har bidratt til at vi har mer
            enn halvert arbeidstiden vi bruker på meglerpakke-leveranser, og at
            kvaliteten på leveransene våre er høyere. Med e-Portal og tilhørende
            automatisering er det mindre risiko for feil i produktene, og
            produktene som leveres fra oss har et mer ensartet oppsett i og med
            at de automatiserte og manuelle produktene er laget på samme mal. Vi
            har også fått mulighet å forbedre og videreutvikle enkelte av våre
            produkter til stor glede for meglerne som bruker produktene.
          </p>
          <p>
            Da vi begynte samarbeidet med Norkart og tok i bruk deres
            automatiseringsløsning startet vi forsiktig med bare noen få
            automatiserte produkter som vi selv kontrollerte og godkjente. Nå
            blir alle automatiserte produkter også automatisk godkjent slik at
            vi kun bruker tid på de fire manuelle produktene våre.
          </p>
        </div>
        <div className="author-infobox">
          <p className="author-name">
            <em>Roy Knutsen</em>
          </p>
          <p className="role">
            <em>Fagansvarlig Geodata</em>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Art4;
