import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import Lokacija from "./components/pages/Lokacija";
import Contact from "./components/pages/Contact";
import NotFound from "./components/pages/NotFound";

function App() {
  let googleAPI;

  if (process.env.NODE_ENV !== "production") {
    googleAPI = process.env.REACT_APP_GOOGLE_API;
  } else {
    googleAPI = process.env.GOOGLE_API;
  }

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/lokacija"
            component={() => <Lokacija GoogleApiKey={googleAPI} />}
          />
          <Route exact path="/kontakt" component={Contact} />
          <Route exact path="/o-nama" component={Home} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
