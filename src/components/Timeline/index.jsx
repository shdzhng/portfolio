import React, { useRef } from 'react';
import {
  TimeLine,
  TimelineContainer,
  ContentContainer,
} from './timeline.styles';
import DataCard from './DataCard';
import educationData from '../../static/data/educationData';

function Timeline() {
  return (
    <TimelineContainer id="education-timeline">
      <TimeLine />
      <ContentContainer>
        {educationData.map((data, key) => (
          <DataCard data={data} key={key} />
        ))}
      </ContentContainer>
    </TimelineContainer>
  );
}

export default Timeline;
