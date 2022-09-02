import React, { useState } from 'react';
import employmentData from '../../static/data/employmentData';
import Container from './JobContainer';

function WorkHistory() {
  const { hospitality, cultural, volunteer } = employmentData;

  const renderJob = (job, i, type) => {
    return <Container job={job} type={type} key={i} />;
  };

  return (
    <div
      style={{
        width: '60vw',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <>
        <h3>Cultural</h3>
        <div>{cultural.map((job, i) => renderJob(job, i, 'cultural'))}</div>
      </>
      <>
        <h3>Hospitality</h3>
        <div>
          {hospitality.map((job, i) => renderJob(job, i, 'hospitality'))}
        </div>
      </>
      <>
        <h3>Volunteering</h3>
        <div>{volunteer.map((job, i) => renderJob(job, i, 'volunteer'))}</div>
      </>
    </div>
  );
}

export default WorkHistory;
