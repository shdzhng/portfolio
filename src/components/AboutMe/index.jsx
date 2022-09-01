import React, { useState, useEffect } from 'react';
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
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { keyframes } from 'styled-components';

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

const RESUME_URL =
  'https://drive.google.com/file/d/1I-YRbm3rctfqkhJaBWNAWRCHEFPPn30t/view?usp=sharing';

const CURRENTLY_LEARNING = ['GraphQL', 'Typescript'];

const SLIDE_ANIMATION = keyframes`
   from { opacity: 0; right:{right};top:0.25em;z-index:99}
   to { opacity: 1;right:{right};top:{top};z-index:99}
  `;

const CustomToolTip = ({ top, right, message, ...props }) => {
  return (
    <ToolTip
      right={right}
      top={top}
      animationWide={SLIDE_ANIMATION}
      message={message}
    >
      {props.children}
    </ToolTip>
  );
};

function AboutMe() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    console.log(show);
  }, [show]);

  return (
    <AboutMeContainer
      onMouseEnter={() => {
        setShow(true);
      }}
      show={show}
    >
      <LeftContainer
        style={{
          display: 'flex',
          flexDirection: 'column',
          flexBasis: '23%',
          boxShadow: '3px 5px 5px 0px rgba(0,0,0,0.25)',
          borderRadius: '1em 1em 1em 1em',
        }}
      >
        <div id="banner" />
        <Portrait />
        <TechstackContainer>
          <h3>Technology</h3>
          <ul>
            {TECHNOLOGIES.map((tech) => (
              <li>{tech}</li>
            ))}
          </ul>
          <span id="filler" />
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
            I am a Junior Frontend Developer based in Los Angeles with a passion
            for building engaging web interfaces. I am the type of software
            engineer who likes to think beyond the code, and focus on how my
            code co-create experiences with the users.
          </p>
          <h4>My background</h4>
          <p>
            I come from a{' '}
            <span className="emphasis">
              Museum and Social Science background{' '}
            </span>
            and{'  '}
            <span className="emphasis">
              hold a Master's degree in Tourism, Society and Environment{' '}
            </span>{' '}
            from Wageningen University in the Netherlands. As a museum
            professional, I was able to leverage my academic background to work
            as an{' '}
            <span className="emphasis"> Education and Program Coordinator</span>{' '}
            and interned to conduct{' '}
            <span className="emphasis"> Impact Evaluation</span>, and{' '}
            <span className="emphasis">Exhibiton Research</span>.{' '}
          </p>
          <p>
            {' '}
            As you might be able to tell, I am someone who learns quick and
            enjoy wearing many hats and seeing all aspects of operation!{' '}
            <CustomToolTip
              top="2em"
              right="-2em"
              message="👇🏻 I can take you there! "
            >
              <StyledLink to="reference">See my references :)</StyledLink>
            </CustomToolTip>
          </p>
          <h4>Why Frontend Engineering?</h4>
          <p>
            Everyone breaks into tech for their own reason, my own lightbulb
            moment was seeing the result of a museum exhibit digitization that I
            coordinated onto{' '}
            <a
              target="__blank"
              href="https://chsa.org/virtual-tour-of-chinese-american-exclusion-inclusion/"
              id="matterport-link"
            >
              {' '}
              Matterport
            </a>
            .
            <span className="emphasis">
              {' '}
              I was so impressed by how technology empowered the museum to break
              free of its location constraints to reach folks far and wide
            </span>
            , that I decided to make the leap of faith.
          </p>
          <p>
            Looking forward, I am excited to branch out and explore all areas of
            software development. I am particularly intrigued by data
            visualization and animation since I come from a scientific
            background and am driven to help curate meaningful user experiences.{' '}
            <CustomToolTip
              top="2em"
              right="-2em"
              message="👇🏻 I can take you there! "
            >
              <StyledLink to="projects">See my projects :)</StyledLink>
            </CustomToolTip>
          </p>
          <p>
            I am currently learning{' '}
            {CURRENTLY_LEARNING.map((tech, i) => {
              if (i === CURRENTLY_LEARNING.length - 1) {
                return `${tech}.`;
              }
              return `${tech} and `;
            })}
          </p>
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
            <IconContainer target="_blank" href={RESUME_URL}>
              <FileDownloadIcon />
              <p
                style={{
                  fontSize: '20px',
                  margin: '0',
                  fontWeight: '900',
                  padding: '5px',
                }}
              >
                CV
              </p>
            </IconContainer>
          </IconGroup>
        </TextContainer>
      </AboutInfo>
    </AboutMeContainer>
  );
}

export default AboutMe;
