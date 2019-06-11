import React from "react";
import Bodo from "../../../images/Bodo.jpg";

const Art2 = props => {
  return (
    <div
      className="bodo co"
      style={{
        left: `${props.scrollLeft}`
      }}
    >
      <div className="art">
        <img src={Bodo} alt="" />
        <div className="text">
          <p>
            Bodø kommune har siden høsten 2016 hatt et samarbeid med Norkart med
            tanke på å automatisere flest mulig av produktene i meglerpakken.
          </p>
          <p>
            Før Norkart henvendte seg til oss hadde vi et samarbeid med Ambita
            Infoland. Etter mange år med manuell produksjon så vi at vi var
            sårbare i ferietiden og ved sykdomsfravær.
          </p>
          <p>
            Forutsetningen for et samarbeid med Norkart var at produktene som
            ble automatisert også skulle kunne leveres til nåværende og
            fremtidige leverandører av megleropplysninger.
          </p>
          <p>
            Etter hvert som Norkart automatiserte nye produkter ble disse lastet
            opp i ordrene. Men før produktene ble endelig godkjent ble de i
            starten manuelt kontrollert og godkjent av saksbehandlere. Da vi
            etter hvert erfarte at det kun var et fåtall av produktene som ikke
            ble levert som forutsatt, valgte vi å levere uten kontroll. Det vil
            fortsatt være en del produkter som må hentes manuelt i kommunens
            arkiv og saksbehandlingssystem.
          </p>
          <p>
            Et godt samarbeidet mellom Norkart og Ambita Infoland var også
            forutsetningen for at dette skal fungere for Bodø kommune. Ambita
            Infolands ordrer lages nå i e-Portal, for så å overføres automatisk.
          </p>
          <p>
            Automatiseringen bidrar til raskere levering på deler av ordren, og
            bedre service for våre kunder.
          </p>
          <p>Vi er også i større grad mindre avhengig av enkeltpersoner.</p>
          <p>Oversikt over automatiske produkter:</p>
          <ul>
            <li>Eiendomsinformasjon</li>
            <li>Opplysninger om eiendomsskatt</li>
            <li>Grunnkart</li>
            <li>Gjeldende arealplaner med bestemmelser</li>
            <li>Kommuneplan</li>
            <li>Tilknytning til offentlig vann og kloakk samt vannmåler</li>
            <li>Avkjørsel til eiendom</li>
            <li>Kommunale eiendomsgebyrer</li>
          </ul>
          <p>Disse produktene må fremdeles produseres manuelt:</p>
          <ul>
            <li>Godkjente bygningstegninger</li>
            <li>Ferdigattest</li>
            <li>Midlertidig brukstillatelse</li>
            <li>Legalpant</li>
          </ul>
        </div>
        <div className="author-infobox">
          <p className="author-name">
            <em>Jørgen Hansen</em>
          </p>
          <p className="role">
            <em>Leder – GIS-seksjonen – Geodatakontoret</em>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Art2;
