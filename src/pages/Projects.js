import React from "react";
// import API from "../utils/API";
import ProjectOne from "./ProjectComponents/ProjectOne";
import ProjectTwo from "./ProjectComponents/ProjectTwo";
import ProjectThree from "./ProjectComponents/ProjectThree";
import ProjectFour from "./ProjectComponents/ProjectFour";
import ProjectFive from "./ProjectComponents/ProjectFive";
import ProjectSix from "./ProjectComponents/ProjectSix";
import Footer from "../components/Footer/index"

function Projects() {
  return (
    <div>
      <ProjectOne></ProjectOne>
      <ProjectTwo></ProjectTwo>
      <ProjectThree></ProjectThree>
      <ProjectFour></ProjectFour>
      <ProjectFive></ProjectFive>
      <ProjectSix></ProjectSix>
      <Footer></Footer>
  </div>
);
}


export default Projects;
