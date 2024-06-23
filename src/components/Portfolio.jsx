import React, { useState } from "react";

const Portfolio = ({ projects }) => {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <div>
      <div className="filters">
        {["All", "Web", "Mobile", "Design"].map((category) => (
          <button key={category} onClick={() => setFilter(category)}>
            {category}
          </button>
        ))}
      </div>
      <div className="projects">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
