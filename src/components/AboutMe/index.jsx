import React, { useState } from 'react';
import {
  Portrait,
  TextContainer,
  AboutMeContainer,
  AboutInfo,
  ToolTip,
  IconContainer,
  IconGroup,
  StyledLink,
  TechstackContainer,
  LeftContainer,
} from './aboutme.styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { keyframes } from 'styled-components';

const CustomToolTip = ({ top, right, message, ...props }) => {
  const slideUp728pxup = keyframes`
   from { opacity: 0; right:{right};top:0.25em;z-index:99}
   to { opacity: 1;right:{right};top:{top};z-index:99}
  `;

  return (
    <ToolTip
      right={right}
      top={top}
      animationWide={slideUp728pxup}
      message={message}
    >
      {props.children}
    </ToolTip>
  );
};

const technologies = [
  'HTML',
  'CSS',
  'Javascript',
  'React',
  'Redux Toolkit',
  'NPM',
  'REST API',
  'Git/Github',
  'Styled-Components',
  'GraphQL/Apollo',
  'Firebase.',
];

function AboutMe() {
  return (
    <AboutMeContainer>
      <LeftContainer
        style={{
          display: 'flex',
          flexDirection: 'column',
          flexBasis: '23%',
        }}
      >
        <Portrait />
        <TechstackContainer>
          <h3>Technology</h3>
          <ul>
            <li> HTML</li>
            <li> CSS</li>
            <li> Javascript</li>
            <li> React</li>
            <li> Redux Toolkit</li>
            <li> NPM</li>
            <li> REST API</li>
            <li> Git/Github</li>
            <li> Styled-Components</li>
            <li> Chart.js</li>
            <li> GraphQL/Apollo</li>
            <li> Firebase/Firestore</li>
          </ul>
          <span id="filler"></span>
        </TechstackContainer>
      </LeftContainer>

      <AboutInfo>
        <TextContainer>
          <h1>
            Hello! My name is{' '}
            <CustomToolTip
              message='💡 pronounced like a "tv show"'
              right="-5em"
              id="name"
            >
              Shou
            </CustomToolTip>{' '}
          </h1>
          <p>
            I am a self-taught Junior Frontend Developer based in 🌴 Los Angeles
            🌴 with a passion for building engaging web interfaces. I am the
            type of software engineer who likes to think beyond the code, and
            focus on how my code co-create experiences with the users.
          </p>
          <br />
          <p>
            I come from a Social Science background and hold a{' '}
            <StyledLink to="education-timeline" className="big-emphasis">
              <CustomToolTip
                message="👇🏻 Click to see my education 👇🏻"
                right="-15em"
              >
                Master's degree in Tourism, Society and Environment{' '}
              </CustomToolTip>
            </StyledLink>{' '}
            from Wageningen University in the Netherlands. As a museum
            professional, I was able to leverage my academic background to work
            as an{' '}
            <span className="small-emphasis">
              {' '}
              Education and Program Coordinator
            </span>{' '}
            and interned to conduct{' '}
            <span className="small-emphasis"> Impact Evaluation</span>, and{' '}
            <span className="small-emphasis">Exhibiton Research</span>. As you
            might be able to tell, I am someone who likes to wear many hats and
            see all aspects of an organizations operation!
          </p>

          <br />
          <p>
            Everyone breaks into tech for their own reason, my own lightbulb
            moment was seeing the result of a museum exhibit digitization that I
            coordinated on Matterport.
            <span className="small-emphasis">
              {' '}
              I was so impressed by how technology had empowered the museum to
              break free of its location constraints to reach folks far and wide
            </span>
            , that I decided to make the leap of faith.
          </p>
          <br />
          <p>
            Looking forward, I am excited to branch out and explore all areas of
            software development. I am particularly intrigued by data
            visualization and animation since I come from a scientific
            background and am driven to help curate meaningful user experiences.
          </p>
          <br />
          <p>I am currently learning: GraphQL and Typescript </p>

          <IconGroup>
            <IconContainer
              target="_blank"
              href="https://www.linkedin.com/in/shouzhang/"
            >
              <LinkedInIcon style={{ fontSize: 'inherit' }} />
            </IconContainer>

            <IconContainer target="_blank" href="https://github.com/shdzhng">
              <GitHubIcon style={{ fontSize: 'inherit' }} />
            </IconContainer>
          </IconGroup>
        </TextContainer>
      </AboutInfo>
    </AboutMeContainer>
  );
}

export default AboutMe;
