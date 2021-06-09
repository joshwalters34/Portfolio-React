import React from "react";
// import Hero from "../components/Hero";
// import Container from "../components/Container";
// import Row from "../components/Row";
// import Col from "../components/Col";
// import Footer from "../components/Footer";

function Home() {
  return (
    <div class="container py-3">
      <div class="row">
        <div class="col">
          <p className="card-text">
            I am currently an experienced Software Quality Assurance Analyst who
            turned their thirst for knowledge into a career as a Software
            Developer.
          </p>
          <p className="card-text">
            I enjoy working with SQL, Javascript, and API calls. Please visit my Projects
            page to view some of my work.  If you have any questions or would like to contact me
            please see my contact info at the bottom of the page!
          </p>
        </div>
        <div class="col">
          <img
            className="bd-placeholder-img"
            width="100%"
            height="500"
            src="https://i.imgur.com/u0mzDAH.jpg"
            alt="Computers"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Home;
