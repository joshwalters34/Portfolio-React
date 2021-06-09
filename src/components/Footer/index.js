import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faEnvelope
} from "@fortawesome/free-brands-svg-icons";



function Footer() {
  return (
<div className="container">
  <div className="row">
    <div className="col justify-content-center">
      <p>This site was created by Josh Walters</p>
      
    </div>
    <div className="col">
    <h3>Contact Me</h3>


<a
  href="https://github.com/joshwalters34"
  // className="youtube social"
>
  <FontAwesomeIcon icon={faGithub} size="2x" />
</a>
{/* <a
  href="https://www.linkedin.com/in/josh-walters-78a050150/"
  // className="facebook social"
>
  <FontAwesomeIcon icon={faEnvelope} size="2x" />
</a> */}
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

export default Footer;
