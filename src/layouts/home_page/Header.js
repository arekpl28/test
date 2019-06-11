import React from "react";
import { NavLink } from "react-router-dom";
import line from "../../images/line.png";
import etorg from "../../images/etorg.png";
import datavarehuset from "../../images/datavarehuset.png";
import kommune from "../../images/kommune.png";
import komtek from "../../images/komtek.png";
import geodata from "../../images/geodata.png";
import cloud from "../../images/cloud.png";

let lineList = [];
for (let i = 0; i < 5; i++) {
  const element = { name: "ls-in-out" + [i + 1] };
  lineList.push(element);
}
const iconsList = [
  {
    name: "e-Torg",
    class: "etorg",
    path: "/",
    import: etorg
  },
  {
    name: "Datavare- huset",
    class: "datavarehuset",
    path: "/",
    import: datavarehuset
  },
  {
    name: "Den digitale kommune",
    class: "kommune",
    path: "/",
    import: kommune
  },
  {
    name: "KOMTEK",
    class: "komtek",
    path: "/",
    import: komtek
  },
  {
    name: "Plan og geodata",
    class: "geodata",
    path: "/",
    import: geodata
  }
];

const Header = () => {
  const lineItem = lineList.map(item => (
    <div className={item.name} key={item.name}>
      <img src={line} alt={item.name} />
    </div>
  ));

  const icon = iconsList.map(item => (
    <div className={item.class} key={item.name}>
      <p>{item.name}</p>
      <NavLink to={item.path}>
        <img src={item.import} alt={item.name} />
      </NavLink>
    </div>
  ));
  return (
    <>
      <div className="ls-wrapper">
        <h1>
          Sammen <span>skaper</span> vi smartere samfunn
        </h1>
        <div className="icon-wrapper">
          <div className="line">{lineItem}</div>
          <div className="icon">
            <ul>{icon}</ul>
          </div>
        </div>
        <img src={cloud} alt="cloud" className="slow cloud" />
        <img src={cloud} alt="cloud" className="fast cloud" />
      </div>
    </>
  );
};

export default Header;
