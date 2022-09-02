import React, { useState } from 'react';
import employmentData from '../../static/data/employmentData';
import Container from './JobContainer';
import { JobsContainer } from './workhistory.styles';

function WorkHistory() {
  const { cultural, volunteer } = employmentData;
  const [openAll, setOpenAll] = useState(false);

  const renderJob = (job, i, type) => {
    return <Container job={job} type={type} key={i} />;
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <JobsContainer>
        <div style={{ flexBasis: '50%' }}>
          <h2 style={{ textAlign: 'center' }}>Worked</h2>
          {cultural.map((job, i) => renderJob(job, i, 'cultural', openAll))}
        </div>

        <div style={{ flexBasis: '50%' }}>
          <h2 style={{ textAlign: 'center' }}>Volunteered</h2>
          {volunteer.map((job, i) => renderJob(job, i, 'volunteer', openAll))}
        </div>
      </JobsContainer>
      <button style={{ margin: '0 auto' }}>open all</button>
    </div>
  );
}

export default WorkHistory;
