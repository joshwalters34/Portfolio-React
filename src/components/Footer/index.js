import React, { Component } from "react";
import resume from "../../Assets/Images/Josh Walters resume.pdf"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faEnvelope
} from "@fortawesome/free-brands-svg-icons";



// function Footer() {
  class Footer extends Component {
  // onResumeClick() {
  //   window.open(Resume);
  // }
  render(){
  return (
<div className="container bg-light text-dark">
  <div className="row d-flex justify-content-between">
    <div className="col ">
      <p href={resume}>View my  Resume 
      {/* <a onClick={this.onResumeClick}> Resume </a> */}
      </p>
      
    </div>
    <div className="col ">
    


<a
  href="https://github.com/joshwalters34"
  // className="youtube social"
>
  <FontAwesomeIcon icon={faGithub} size="2x" />
</a>

<a
  href="https://www.linkedin.com/in/josh-walters-78a050150/"
  // className="facebook social"
>
<FontAwesomeIcon icon={faLinkedin} size="2x" />
</a>
</div>
<div className="col">
      <p>Cell: 828-612-5755</p>
      <p> Email: joshwalters34@gmail.com </p>
      
    </div>
</div>
</div>

   
  );
}
  }

export default Footer;
