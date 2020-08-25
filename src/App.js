import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Lokacija from "./components/pages/Lokacija";
import Cijene from "./components/pages/Cijene";
import Contact from "./components/pages/Contact";
import NotFound from "./components/pages/NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/lokacija" component={Lokacija} />
          <Route exact path="/kontakt" component={Contact} />
          <Route exact path="/cijene" component={Cijene} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
