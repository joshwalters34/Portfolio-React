import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function AboutMe() {
  return (
    <div className="container py-3">
    <div className="row">
       <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">About Me</h5>
          <p className="card-text">
                My name is Josh Walters and I'm currently enrolled in a Full Stack Coding Bootcamp through UNC-Charlotte.  I also earned my bachelor's
                degree from UNC-Charlotte.   I have over 10 years experience working as a Quality Assurance Anaylyst in healthcare IT.  I enjoy testing
                software to look for bugs and enhancements, so I decided I'd also like to fix the bugs I find or make improvements to the software I work with.
          </p>
          <p className="card-text">
                Coming from a software testing background will make me a better coder.  My testing background has taught me that a software developer
                needs to think past the block of code they're fixing.  While the primary goal is to fix the code with the bug, you also have to think about
                any other areas of the application that could be impacted.  This is where I'll excel. 
          </p>
          <p>Here are some of the technologies I use</p>
          <ul>
            <li>Javascript</li>
            <li>jQuery</li>
            <li>Bootstrap</li>
            <li>API calls</li>
            <li>Handlebars</li>
            <li>SQL</li>
            <li>MongoDB</li>
            <li>React</li>
            <li>Sequelize</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>AJAX</li>
          </ul>
        </div>
      </div>
      <div className="col-md-4 d-flex justify-content-end">
        <img
          className="bd-placeholder-img"
          width="90%"
          height="300"
          src="https://media-exp3.licdn.com/dms/image/C4E03AQGPlfJBbfr2fw/profile-displayphoto-shrink_200_200/0/1616115415217?e=1628726400&v=beta&t=42NJOvUCaJ1GC5e7mu-s4GV94IsAA6VQXeYoMrOQEJc"
          alt="Josh Walters"
         >
        </img>
      </div>
    </div>
  </div>
);
}
    
//     <div>
//       <Hero backgroundImage="https://i.imgur.com/u0mzDAH.jpg">
//         <h1>About Me</h1>
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

export default AboutMe;
