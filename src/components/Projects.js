import React from 'react';
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';

function Projects() {
  const projectList = [
    { title: "Portfolio Website", img: project1 },
    { title: "React E-commerce App", img: project2 },
    { title: "Smart Table Project", img: project3 },
  ];

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.img} alt={project.title} />
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
