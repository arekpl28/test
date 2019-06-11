import React from "react";
import Ordal from "../../../images/Ordal.png";

const Art5 = props => {
  return (
    <div
      className="ordal co"
      style={{
        left: `${props.scrollLeft}`
      }}
    >
      <div className="art">
        <img src={Ordal} alt="" />
        <div className="text">
          <p>Les hele saken om Orkdal kommune og automatiseringsløsninger</p>
          <p>
            Orkdal kommune valgte å ta i bruk Norkarts automatiseringsløsninger
            for megleropplysninger våren 2018. Samtidig fikk vi testet ut felles
            ordregenerator. Vi opplevde at det tidligere ble brukt mye tid og
            ressurser på leveranser av megleropplysninger, og så et stor
            potensiale i at automatisering kunne frigjøre ressurser. Vi opplevde
            fort at felles ordrebehandler var et meget godt verktøy for
            administrering og behandling av ordrer. For oppgaver som ikke er
            automatisert, benytter vi oss av dokumentmaler. Disse malene
            effektiviserer også mange av de “manuelle” oppgavene. Ved bruk av
            Norkarts automatiseringsløsninger og ordresystem har vi langt på vei
            halvert arbeidsmengden vi hadde med utlevering av
            megleropplysninger. Produktene vi leverer ut har nå også blitt bedre
            og presenteres på en mer ryddig og oversiktlig måte. Vi har fått
            flere gode tilbakemeldinger fra meglere på dette.
          </p>
          <p>
            Vi opplever i dag at kommunen ikke har “styringen” når det gjelder
            utlevering av megleropplysninger. Mangel på åpne løsninger har
            medført at vi har vært nødt til å forholde oss til 3 ulike klienter
            for å behandle ordrer. Dette medfører mye merarbeid for oss og vi
            ønsker selv å velge hvordan vi utleverer data og hvordan ordrene
            skal behandles. Samtidig ønsker vi at alle aktører skal få lik
            tilgang og samme pris for de produktene vi leverer ut. Som en
            mellomstor kommune har vi ikke ressurser til å utvikle denne typen
            løsninger selv. Vi har derfor valgt å ta i bruk felles
            ordrebehandler for å ta tilbake “styringen” på utlevering av
            offentlig informasjon til meglerne. Skal vi få utnyttet
            automatisering og effektivisering av offentlig informasjon fult ut,
            er vi avhengig av å kunne sette premissene selv, noe vi tror vi kan
            få til gjennom felles ordrebehandler.
          </p>
        </div>
        <div className="author-infobox">
          <p className="author-name">
            <em>Christian Bonvik</em>
          </p>
          <p className="role">
            <em>Geodataansvarlig</em>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Art5;
