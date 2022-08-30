import React, { useState, useEffect } from 'react';
import projectData from '../../static/projectData';
import { Container, SideBarItem, SideBar } from './index.styles';
import ProjectContainer from './ProjectContainer';

console.log(projectData);

function ProjectDisplay() {
  const [selectedProjectId, setSelectedProjectId] = useState(0);

  const handleSelect = (i) => {
    setSelectedProjectId(i);
  };

  return (
    <Container>
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
