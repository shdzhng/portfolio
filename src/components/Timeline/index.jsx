import React, { useState, useEffect } from 'react';
import { colors } from '../../static/colors';
import { educationData } from '../../static/data';
import {
  TimeLine,
  TimelineContainer,
  ContentContainer,
  TimelineInnerLine,
} from './timeline.styles';
import DataCard from './DataCard';

function Timeline() {
  return (
    <TimelineContainer>
      <TimeLine />
      <ContentContainer>
        {educationData.map((data, i) => (
          <DataCard data={data} i={i} />
        ))}
      </ContentContainer>
    </TimelineContainer>
  );
}

export default Timeline;
