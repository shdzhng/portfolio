import React from 'react';
import {
  Container,
  Badge,
  Title,
  Info,
  ProjectContainer,
  TimeLinePoint,
  ProjectListItem,
} from './timeline.styles';

function DataCard({ data }) {
  const { name, degreeName, degreeType, grade, projects, duration } = data;

  return (
    <Container>
      <TimeLinePoint />
      <Info>{duration}</Info>
      <Title>{`${degreeName}`}</Title>
      <Badge>{degreeType}</Badge>
      <Info>{grade ? `${name} (GPA:${grade})` : name}</Info>
      <ProjectContainer>
        {projects.map(({ name }, key) => (
          <ProjectListItem key={key}>{name}</ProjectListItem>
        ))}
      </ProjectContainer>
    </Container>
  );
}
export default DataCard;
