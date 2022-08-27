import React from 'react';
import {
  Container,
  Badge,
  Title,
  Info,
  ProjectContainer,
  TimeLinePoint,
} from './timeline.styles';

function DataCard({ data, i }) {
  const { name, degreeName, degreeType, grade, projects, duration } = data;

  return (
    <Container key={i}>
      <TimeLinePoint />
      <Info>{duration}</Info>
      <Title>{`${degreeName}`}</Title>
      <Badge>{degreeType}</Badge>
      <Info>{grade ? `${name} (GPA:${grade})` : name}</Info>
      <ProjectContainer>
        {/* {projects.map(({ name }) => (
          <ProjectListItem>{name}</ProjectListItem>
        ))} */}
      </ProjectContainer>
    </Container>
  );
}
export default DataCard;
