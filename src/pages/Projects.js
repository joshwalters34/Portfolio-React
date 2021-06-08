import React from "react";
import projects from "../projects.json"

// {projects.map(project => (
//   key={project.title}
//   title={project.title}
//   description={project.description}
//   website={project.website}
//   repository={project.repository}
//   )};

function Projects({ title, website, repository, description, image}) {
  return (
    
    <div className="card mb-3" style={{width: '90%'}}>
    <div className="row no-gutters">
      <div className="col-md-4">
        <img
          className="bd-placeholder-img"
          width="100%"
          height="250"
          alt={title} src={image}></img>
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">title {title}</h5>
          <p className="card-text">
            {description} description
          </p>
          <p className="card-text">
            Visit my {website} 
          </p>
          <p className="card-text">
          View my {repository} 
          </p>
          
        </div>
      </div>
    </div>
  </div>
);
  //   <div className="card">
   
  //   <div className="content">
      
  //       <h1>
  //         <strong>{title}</strong> 
  //       </h1>
  //       <p>
  //         <strong>{description}</strong> 
  //       </p>
  //       <p>
  //         <strong>Location:View my {website}
  //       <p>
  //         <strong>Location:</strong> Visit my {repository}
  //       </p>
  //       <div className="img-container">
  //     <img alt={title} src={image} />
  //   </div>
  //   </div>
  // </div>

}


export default Projects;
