import React, { useState } from 'react';
import employmentData from '../../static/data/employmentData';
import Container from './JobContainer';
import { JobsContainer } from './workhistory.styles';

function WorkHistory() {
  const { cultural, volunteer } = employmentData;
  const [openAll, setOpenAll] = useState(false);

  const renderJob = (job, i, type, openAll) => {
    return <Container job={job} type={type} key={i} openAll={openAll} />;
  };

  const handleClick = () => {
    setOpenAll((prev) => !prev);
  };

  return (
    <JobsContainer>
      <div style={{ flexBasis: '50%' }}>
        <h1 style={{ textAlign: 'center' }}>Worked</h1>
        {cultural.map((job, i) => renderJob(job, i, 'cultural', openAll))}
      </div>

      <div style={{ flexBasis: '50%' }}>
        <h1 style={{ textAlign: 'center' }}>Volunteered</h1>

        {volunteer.map((job, i) => renderJob(job, i, 'volunteer', openAll))}
        <button
          onClick={() => {
            handleClick();
          }}
        >
          {openAll ? '🔺 Collapse All 🔺' : '🔻 Expand All 🔻'}
        </button>
      </div>
    </JobsContainer>
  );
}

export default WorkHistory;
