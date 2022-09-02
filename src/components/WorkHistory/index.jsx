import React, { useState } from 'react';
import employmentData from '../../static/data/employmentData';
import Container from './JobContainer';

function WorkHistory() {
  const { cultural, volunteer } = employmentData;

  const renderJob = (job, i, type) => {
    return <Container job={job} type={type} key={i} />;
  };

  return (
    <div
      style={{
        width: '80vw',
        display: 'flex',
        flexDirection: 'row',
        gap: '1em',
      }}
    >
      <div>
        <h2 style={{ textAlign: 'center' }}>Worked</h2>
        {cultural.map((job, i) => renderJob(job, i, 'cultural'))}
      </div>

      <div>
        <h2 style={{ textAlign: 'center' }}>Volunteered</h2>
        {volunteer.map((job, i) => renderJob(job, i, 'volunteer'))}
      </div>
    </div>
  );
}

export default WorkHistory;
