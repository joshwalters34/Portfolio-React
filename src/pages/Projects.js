import React, { Component } from "react";
import projects from "../utils/projects";

class Projects extends Component {
  state = {
    projects,
  };
  render() {
    return (
      <div className="container">
      {this.state.projects.map((project) => (
        
      <div className="card mb-3" style={{ width: "90%" }}>
        <div className="row no-gutters">

              <div className="col-md-4">
                <img
                  className="bd-placeholder-img"
                  width="100%"
                  height="250"
                  alt={project.title}
                  src={project.image}
                ></img>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description} </p>
                  <p className="card-text">Visit my 
                    <a class="a-modal" href={project.website} target="_blank" 
                    rel="noreferrer">website</a></p>
                  <p className="card-text">View my 
                    <a className="a-modal" href={project.repository} target="_blank" 
                    rel="noreferrer">repository</a></p>
                </div>
              </div>
            </div>
          
      </div>
      ))}
      </div>
    );
  }
  
}

export default Projects;
