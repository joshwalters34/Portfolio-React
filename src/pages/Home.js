import React from "react";
// import Hero from "../components/Hero";
// import Container from "../components/Container";
// import Row from "../components/Row";
// import Col from "../components/Col";
// import Footer from "../components/Footer";

function Home() {
  return (
    <div className="card mb-3" style={{width: '90%'}}>
    <div className="row no-gutters">
       <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">Welcome and let me introduct myself!!</h5>
          <p className="card-text">
            I am currently an experienced Software Quality Assurance Analyst who turned their thirst for knowledge into a career as a Software Developer.    
          </p>
          <p className="card-text">
            I enjoy working with SQL, Javascript, and API calls.
          </p>
        </div>
      </div>
      <div className="col-md-4">
        <img
          className="bd-placeholder-img"
          width="100%"
          height="500"
          src="https://i.imgur.com/u0mzDAH.jpg"
          alt="Computers"
         >
        </img>
      </div>
    </div>
  </div>
);
}
//     <div>
//       <Hero backgroundImage="https://i.imgur.com/u0mzDAH.jpg">
//         <h1>Josh Walters</h1>
//         <h2>Welcome to my porfolio page</h2>
//       </Hero>
//       <Container style={{ marginTop: 30 }}>
//         <Row>
//           <Col size="md-12">
//             <h1>Introduction!</h1>
//           </Col>
//         </Row>
//         <Row>
//           <Col size="md-12">
//             <p>
//             My name is Josh Walters and I'm currently enrolled in a Full Stack Coding Bootcamp through UNC-Charlotte.  I also earned my bachelor's                UNC-Charlotte.  I've been working in the healthcare IT field for over 18 years.  I worked at the
//                 degree from UNC-Charlotte.   I have over 10 years experience working as a Quality Assurance Anaylyst in healthcare IT.  I enjoy testing
//                 software to look for bugs and enhancements, so I decided I'd also like to fix the bugs I find or make improvements to the software I work with.
//             </p>
//             <p>
//               Coming from a software testing background will make me a better coder.  My testing background has taught me that a software developer
//               needs to think past the block of code they're fixing.  While the primary goal is to fix the code with the bug, you also have to think about
//               any other areas of the application that could be impacted.  This is where I'll excel.  
//             </p>
            
//           </Col>
//         </Row>
      
//       </Container>
//     </div>
//   );
// }

export default Home;
