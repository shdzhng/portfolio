import React, { useState, memo } from 'react';
import projectData from '../../static/data/projectData';
import { Container, SideBarItem, SideBar } from "./projects.styles";
import ProjectContainer from "./ProjectContainer";

function ProjectDisplay() {
  const { selectedProjectId, handleSelect } = useSelectProjectById();

  return (
    <>
      <h1 id="projects" style={{ margin: "1em 0", textAlign: "center" }}>
        🛠️ Team and Solo Projects🛠️
      </h1>
      <Container style={{ marginBottom: "2em" }}>
        <SideBar>
          {projectData.map((project, i) => (
            <SideBarItem
              active={selectedProjectId === i}
              onClick={() => {
                handleSelect(i);
              }}
              key={i}
            >
              {project.name}
            </SideBarItem>
          ))}
        </SideBar>
        <ProjectContainer
          id="projects"
          project={projectData[selectedProjectId]}
        />
      </Container>
    </>
  );
}

export default ProjectDisplay;

const useSelectProjectById = () => {
  const [selectedProjectId, setSelectedProjectId] = useState(0);
  const handleSelect = (i) => {
    setSelectedProjectId(i);
  };

  return { selectedProjectId, handleSelect };
};
