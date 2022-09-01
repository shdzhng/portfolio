import React, { useState } from 'react';
import projectData from '../../static/projectData';
import { Container, SideBarItem, SideBar } from './projects.styles';
import ProjectContainer from './ProjectContainer';
function ProjectDisplay() {
  const [selectedProjectId, setSelectedProjectId] = useState(0);

  const handleSelect = (i) => {
    setSelectedProjectId(i);
  };

  return (
    <Container id="projects">
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
      <ProjectContainer project={projectData[selectedProjectId]} />
    </Container>
  );
}

export default ProjectDisplay;
