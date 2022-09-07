import React, { useState, useEffect, memo } from 'react';
import { JobContainer, ContentContainer } from './workhistory.styles';

const Container = ({ job, type, openAll }, i) => {
  const [show, setShow] = useState(false);
  const { name, longName, end, start, location, skills, positions, longTitle } =
    job;

  useEffect(() => {
    setShow(openAll);
  }, [openAll]);

  const handleToggle = () => {
    setShow((prev) => !prev);
  };

  return (
    <JobContainer
      onClick={() => {
        handleToggle();
      }}
      show={show}
      trueHeader={`${positions[0].title} @ ${name}`}
      key={i}
    >
      <ContentContainer variant={type}>
        <p id="name">{longName}</p>
        <p id="location">
          {location} | {`${start} - ${end}`}
        </p>
        <ul id="positions-ul">
          {positions.map(({ title, longTitle, type, responsibility }) => (
            <li key={title + type}>
              <p>{longTitle}</p>
              <ul>
                {responsibility.map((task, i) => (
                  <li
                    key={task + i}
                    dangerouslySetInnerHTML={{ __html: task }}
                  ></li>
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

export default memo(Container);
