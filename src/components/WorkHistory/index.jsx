import React, { useState, memo, useRef } from 'react';
import employmentData from '../../static/data/employmentData';
import Container from './JobContainer';
import { JobsContainer } from "./workhistory.styles";

function WorkHistory() {
  const { cultural, volunteer, tech } = employmentData;
  const [openAll, setOpenAll] = useState(false);
  const viewElement = useRef(null);

  const handleClick = () => {
    if (openAll) viewElement.current.scrollIntoView({ behavior: "smooth" });
    setOpenAll((prev) => !prev);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1 id="whereibeen" ref={viewElement}>
        Where I've <span />
      </h1>
      <JobsContainer>
        <JobTypeContainer title="Worked" jobsArr={cultural} openAll={openAll} />
        <JobTypeContainer
          title="Volunteered"
          jobsArr={volunteer}
          openAll={openAll}
          handleClick={handleClick}
        />
      </JobsContainer>
    </div>
  );
}

export default memo(WorkHistory);

const renderJob = (job, i, type, openAll) => {
  return <Container job={job} type={type} key={i} openAll={openAll} />;
};

const JobTypeContainer = ({ title, jobsArr, openAll, handleClick }) => {
  return (
    <div style={{ flexBasis: "50%" }}>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      {jobsArr.map((job, i) => renderJob(job, i, "cultural", openAll))}
      {handleClick && (
        <button
          onClick={() => {
            handleClick();
          }}
        >
          {openAll ? "🔺 Collapse All 🔺" : "🔻 Expand All 🔻"}
        </button>
      )}
    </div>
  );
};
