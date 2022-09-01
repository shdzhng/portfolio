import React, { useRef } from 'react';
import { educationData } from '../../static/data';
import {
  TimeLine,
  TimelineContainer,
  ContentContainer,
} from './timeline.styles';
import DataCard from './DataCard';

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
