import React, { Component } from "react";
import { Link } from "react-router-dom";

class Support extends Component {
  state = {};
  render() {
    return (
      <div className="contact-box info">
        <div className="wraper">
          <form className="suport" onSubmit={this.handleSubmit} noValidate>
            <label htmlFor="email">
              <p>E-post</p>
              <input type="email" placeholder="din@epost.no" />
            </label>
            <label htmlFor="password">
              <p>Passord</p>
              <input type="password" placeholder="Fyll inn passord" />
            </label>
            <button>Logg inn</button>
          </form>
          <Link to="/">Registrer ny bruker</Link>
        </div>
        <div className="info">
          <h3>Logg deg inn i vårt selvbetjente kundesenter.</h3>
          <p>
            Dette er Norkart sin «Min side» funksjonalitet hvor du kan se en
            oversikt over ditt kundeforhold. Der kan de finne svar, se
            bestillinger, servicesaker, historikk og så videre.
          </p>
          <p>
            KOMTEK / Plan- og geodata kundestøtte: <span>674 83 888</span>
          </p>
        </div>
      </div>
    );
  }
}

export default Support;
