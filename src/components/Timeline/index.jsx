import React, { useState, useEffect } from 'react';
import { colors } from '../../static/colors';
import { educationData } from '../../static/data';
import {
  TimeLine,
  TimelineContainer,
  ContentContainer,
} from './timeline.styles';
import DataCard from './DataCard';
import { useTrail, animated as a } from 'react-spring';

function Timeline() {
  const config = { mass: 5, tension: 2000, friction: 200 };
  const trail = useTrail(educationData.length, {
    config,
    opacity: 1,
    from: { opacity: 0, x: 200, height: 0 },
  });

  return (
    <TimelineContainer>
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
