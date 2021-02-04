import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavLinks from "./components/NavLinks";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div>
        <NavLinks />
        <Route exact path="/"> <About /></Route>
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;