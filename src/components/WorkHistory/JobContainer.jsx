import React, { useState } from 'react';
import { JobContainer, ContentContainer } from './workhistory.styles';

const Container = ({ job, type }, i) => {
  const [show, setShow] = useState(false);
  const { name, end, start, location, skills, positions } = job;

  const handleToggle = () => {
    setShow((prev) => !prev);
  };

  return (
    <JobContainer
      onClick={() => {
        handleToggle();
      }}
      show={show}
      trueHeader={`${positions[0].title} (${name})`}
      falseHeader={`${name} | ${location}`}
      key={i}
    >
      <ContentContainer variant={type}>
        <p id="name">
          {name} | {location}
        </p>
        <p id="duration">{`${start} - ${end}`}</p>
        <ul id="positions-ul">
          {positions.map(({ title, type, responsibility }) => (
            <li key={title + type}>
              <p>
                {title} ({type})
              </p>
              <ul>
                {responsibility.map((thing, i) => (
                  <li key={thing + i}>{thing}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        {type === 'volunteer' ? null : (
          <>
            <p id="skills-ul">
              <span id="skills-header">Skills: </span>
              {skills.map((skill, i) => {
                if (i === skills.length - 1)
                  return <span key={skill + i}> {skill}. </span>;
                return <span key={skill + i}> {skill}, </span>;
              })}
            </p>
          </>
        )}
      </ContentContainer>
    </JobContainer>
  );
};

export default Container;
