import React, { useState, memo } from 'react';
import projectData from '../../static/data/projectData';
import { Container, SideBarItem, SideBar, PolkaFlex } from './projects.styles';
import ProjectContainer from './ProjectContainer';

function ProjectDisplay() {
  const [selectedProjectId, setSelectedProjectId] = useState(0);
  const handleSelect = (i) => {
    setSelectedProjectId(i);
  };

  return (
    <>
      <h1 id="projects" style={{ margin: '1em 0', textAlign: 'center' }}>
        🛠️ What I've Built 🛠️
      </h1>
      <Container style={{ marginBottom: '2em' }}>
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
