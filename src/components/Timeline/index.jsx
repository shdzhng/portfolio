import React, { useState, useEffect } from 'react';
import { colors } from '../../static/colors';
import { educationData } from '../../static/data';
import {
  TimeLine,
  TimelineContainer,
  ContentContainer,
} from './timeline.styles';
import DataCard from './DataCard';

function Timeline() {
  return (
    <TimelineContainer>
      <p>education timeline</p>
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
