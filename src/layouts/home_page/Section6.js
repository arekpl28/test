import React, { Component } from "react";
import Support from "./contact/Support";
import Contact from "./contact/Contact";

import TommyHaugen from "../../images/TommyHaugen.jpg";
import KennethOyen from "../../images/KennethOyen.jpg";
import AndreasHammerstedt from "../../images/AndreasHammerstedt.png";
import EspenSagen from "../../images/EspenSagen.gif";
import MikeGlrtz from "../../images/MikeGlrtz.png";
import Eva from "../../images/Eva.jpg";
import ArneRonny from "../../images/ArneRonny.jpg";
import Norkartresepsjon from "../../images/Norkartresepsjon.png";
import JohnGran from "../../images/JohnGran.jpg";

const data = {
  tommy: {
    id: 0,
    image: TommyHaugen,
    name: "Tommy Haugen",
    msg: "Markedssjef kommunaltekniske tjenester",
    tel: "909 26 386",
    email: "tommy.haugen",
    extra: "tommy"
  },
  keneth: {
    id: 1,
    image: KennethOyen,
    name: "Kenneth Øyen-Eriksen",
    msg: "Teknisk rådgiver",
    tel: "988 90 381",
    email: "ko",
    extra: "kenneth"
  },
  andreas: {
    id: 2,
    image: AndreasHammerstedt,
    name: "Andreas Hammarstedt",
    msg: "Kundeansvarlig - Kommuner",
    tel: "954 69 192",
    email: "andreas.hammarstedt",
    extra: "andreas"
  },
  espen: {
    id: 3,
    image: EspenSagen,
    name: "Espen Sagen",
    msg: "Markedssjef for Plan og Geodata",
    tel: "992 23 012",
    email: "espen.sagen",
    extra: "espen"
  },
  mike: {
    id: 4,
    image: MikeGlrtz,
    name: "Mike Görtz",
    msg: null,
    tel: "994 78 566",
    email: "mike.gortz",
    extra: "mike"
  },
  eva: {
    id: 5,
    image: Eva,
    name: "Eva Fjærestad",
    msg: "Direktør Konsulenttjenester",
    tel: "906 92 545",
    email: "eva.fjaerestad",
    extra: "eva"
  },
  arne: {
    id: 6,
    image: ArneRonny,
    name: "Arne Ronny Tøstibakken",
    msg: "Markedssjef for Vann og avløp",
    tel: "970 55 861",
    email: "arne.ronnytostibakken",
    extra: "arne"
  },
  magnus: {
    id: 7,
    image: Norkartresepsjon,
    name: "Magnus Ove Johansson",
    msg: "Markedsansvarlig datavarehus",
    tel: "970 96 501",
    email: "magnus.ove.johansson",
    extra: "magnus"
  },
  john: {
    id: 8,
    image: JohnGran,
    name: "John Gran",
    msg: "Direktør Datavarehus",
    tel: "917 72 900",
    email: "john.gran",
    extra: "john"
  },
  resepsjon: {
    id: 9,
    image: Norkartresepsjon,
    name: "Norkart resepsjon",
    msg: null,
    tel: "67 55 14 00 (08:00-16:00)",
    email: "info",
    extra: "resepsjon"
  }
};

class Section6 extends Component {
  state = {
    buttonList: [
      {
        id: 0,
        text: "Kundestøtte",
        className: "contact active",
        activeBtn: true
      },
      {
        id: 1,
        text: "KOMTEK",
        className: "contact",
        activeBtn: false
      },
      {
        id: 2,
        text: "e-Torg",
        className: "contact",
        activeBtn: false
      },
      {
        id: 3,
        text: "Plan - og geodata",
        className: "contact",
        activeBtn: false
      },
      {
        id: 4,
        text: "Digital kommune",
        className: "contact",
        activeBtn: false
      },
      {
        id: 5,
        text: "Vann og Avløp",
        className: "contact",
        activeBtn: false
      },
      {
        id: 6,
        text: "Datavarehus",
        className: "contact",
        activeBtn: false
      },
      {
        id: 7,
        text: "Andre henvendelser",
        className: "contact",
        activeBtn: false
      }
    ],
    activeNumber: 1
  };

  handleClickContakt = id => {
    let btn = this.state.buttonList.map(item => {
      if (item.className === "contact active") {
        item.className = "contact";
        item.activeBtn = false;
      }
      if (id === item.id) {
        item.className = "contact active";
        item.activeBtn = true;
      }
      return item;
    });

    this.setState({
      buttonList: btn
    });

    clearInterval(this.indexInterval);
  };

  componentDidMount() {
    this.indexInterval = setInterval(this.changeActiveButton, 3000);
  }
  componentWillUnmount() {
    clearInterval(this.indexInterval);
  }

  changeActiveButton = () => {
    let btn = this.state.buttonList.map(item => {
      if (item.id !== this.state.activeNumber) {
        item.className = "contact";
        item.activeBtn = false;
      }
      if (item.id === this.state.activeNumber) {
        item.className = "contact active";
        item.activeBtn = true;
      }
      return item;
    });
    this.setState({
      buttonList: btn,
      activeNumber: this.state.activeNumber + 1
    });
    if (this.state.activeNumber === 8) {
      this.setState({
        activeNumber: 0
      });
    }
  };

  render() {
    const buttonList = this.state.buttonList;
    const buttonItem = buttonList.map(item => (
      <button
        className={item.className}
        key={item.id}
        onClick={() => this.handleClickContakt(item.id)}
      >
        {item.text}
      </button>
    ));

    return (
      <>
        <article className="section6">
          <h3>Ønsker du mer informasjon om våre tjenester?</h3>
          <p>
            Trykk på knappen under rundt hva du ønsker å vite mer om – så sørger
            vi for at henvendelsen hurtigst mulig når rette vedkommende.
          </p>
          <section>
            {buttonItem}
            {buttonList[0].activeBtn ? <Support /> : null}
            {buttonList[1].activeBtn ? <Contact data={data.tommy} /> : null}
            {buttonList[2].activeBtn ? <Contact data={data.keneth} /> : null}
            {buttonList[2].activeBtn ? <Contact data={data.andreas} /> : null}
            {buttonList[3].activeBtn ? <Contact data={data.espen} /> : null}
            {buttonList[4].activeBtn ? <Contact data={data.mike} /> : null}
            {buttonList[4].activeBtn ? <Contact data={data.eva} /> : null}
            {buttonList[5].activeBtn ? <Contact data={data.arne} /> : null}
            {buttonList[6].activeBtn ? <Contact data={data.magnus} /> : null}
            {buttonList[6].activeBtn ? <Contact data={data.john} /> : null}
            {buttonList[7].activeBtn ? <Contact data={data.resepsjon} /> : null}
          </section>
        </article>
      </>
    );
  }
}

export default Section6;
