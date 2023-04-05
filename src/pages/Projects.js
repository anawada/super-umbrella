import React from "react";
import ProjectItem from "../components/Project";
import Proj1 from "../assets/Proj1.png";
import Proj2 from "../assets/Proj2.png";
import Proj3 from "../assets/Proj3.png";
import Proj4 from "../assets/Proj4.png";
import Proj5 from "../assets/Proj5.png";


export const ProjectList = [
  {
    name: "JobHive",
    image: Proj1,
    gitHub: "",
    skills: "JavaScript,HTML,CSS",
    livePage: "https://google.com';",
    description: "sjdhksadkasjhdjksabdsjhadjksah",
  },
  {
    name: "Country Info",
    image: Proj2,
    skills: "React,Node.js,MongoDB",
    livePage: "https://google.com';",
    description: "sjdhksadkasjhdjksabdsjhadjksah",
  },
  {
    name: "Team Dashboard",
    image: Proj3,
    skills: "React,Node.js,MongoDB,SpotifyAPI",
    livePage: "https://google.com';",
    description: "sjdhksadkasjhdjksabdsjhadjksah",
  },
  {
    name: "Agenda",
    image: Proj4,
    skills: "React,Node.js,MySQL,GraphQL",
    livePage: "https://google.com';",
    description: "sjdhksadkasjhdjksabdsjhadjksah",
  },
  {
    name: "Password Generator",
    image: Proj5,
    skills: "JavaScript,HTML,CSS",
    livePage: "https://google.com';",
    description: "sjdhksadkasjhdjksabdsjhadjksah",
  },
];

function Projects() {
  return (
    <div className="projects min-h-screen">
      <h1> My Personal Projects</h1>
      <div className="projectList grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {ProjectList.map((project) => {
          return (
            <ProjectItem name={project.name} image={project.image} description={project.description} livePage={project.livePage}/>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
