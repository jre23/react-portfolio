import React from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";
import NavLinks from "./components/NavLinks";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router basename="/react-portfolio">
      <div>
        <NavLinks />
        <Switch>
          <Route exact path="/">
            <About />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route>
            <About />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
