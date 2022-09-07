import React, { useState, memo, useRef } from 'react';
import employmentData from '../../static/data/employmentData';
import Container from './JobContainer';
import { JobsContainer } from './workhistory.styles';
import Divider from '../../static/components/Divder';

function WorkHistory() {
  const { cultural, volunteer } = employmentData;
  const [openAll, setOpenAll] = useState(false);
  const viewElement = useRef(null);
  const renderJob = (job, i, type, openAll) => {
    return <Container job={job} type={type} key={i} openAll={openAll} />;
  };

  const handleClick = () => {
    if (openAll) viewElement.current.scrollIntoView({ behavior: 'smooth' });
    setOpenAll((prev) => !prev);
  };

  return (
    <>
      <h1 id="whereibeen" ref={viewElement}>
        Where I've <span />
      </h1>
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
    </>
  );
}

export default memo(WorkHistory);
