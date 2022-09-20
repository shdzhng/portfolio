import React, { useState, memo } from 'react';
import {
  Portrait,
  AboutMeContainer,
  AboutInfo,
  TechstackContainer,
  LeftContainer,
} from './aboutme.styles';
import CardBackView from './CardBackView.jsx';
import CardFrontView from './CardFrontView.jsx';
import { CustomToolTip } from './CustomToolTip';

const TECHNOLOGIES = [
  'HTML',
  'CSS',
  'Javascript',
  'React',
  'Redux Toolkit',
  'NPM',
  'REST API',
  'Git/Github',
  'Chart.js',
  'Styled-Components',
  'GraphQL/Apollo',
  'Firebase/Firestore',
];

function AboutMe() {
  const [show, setShow] = useState(false);

  return (
    <AboutMeContainer
      style={{ height: '100vh' }}
      id="about"
      onMouseEnter={() => {
        setShow(true);
      }}
      show={show}
    >
      <LeftContainer>
        <div
          id="banner"
          onClick={() => (window.location = 'mailto:shoud.zhang@gmail.com')}
        />

        <Portrait />

        <TechstackContainer>
          <h3 style={{ fontFamily: 'Lato, sans-serif' }}>Technology</h3>
          <ul>
            {TECHNOLOGIES.map((tech, i) => (
              <li key={i} style={{ fontFamily: 'Lato, sans-serif' }}>
                {tech}
              </li>
            ))}
          </ul>
          <span id="filler" />
        </TechstackContainer>
      </LeftContainer>

      <AboutInfo>
        <div className="about-header">
          <p style={{ fontWeight: '700' }}>
            Hi there! My name is{' '}
            <CustomToolTip
              message='💡 pronounced like a "tv show"'
              right="-5em"
              id="name"
            >
              Shou
            </CustomToolTip>{' '}
          </p>
        </div>
        <div className="card">
          <div className="card-front">
            <div className="card-content">
              <CardFrontView />
            </div>
          </div>
          <div className="card-back">
            <div className="card-content">
              <CardBackView />
            </div>
          </div>
        </div>
      </AboutInfo>
    </AboutMeContainer>
  );
}

export default memo(AboutMe);
