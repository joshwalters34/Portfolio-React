import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import ContactMe from "./pages/ContactMe"

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/aboutMe" component={AboutMe} />
          <Route exact path="/Projects" component={Projects} />
          <Route exact path="/ContactMe" component={ContactMe} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
