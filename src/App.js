import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./css/style.css";
import Navigation from "./layouts/Navigation";
import Content from "./layouts/Content";
import Footer from "./layouts/Footer";

class App extends Component {
  state = {};

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="master-wrapper">
          {<Navigation />}
          <section className="content">
            <Content />
          </section>
          <footer>
            <Footer />
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
