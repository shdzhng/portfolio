import React, { useState, memo } from 'react';
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

  return (
    <AboutMeContainer
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
          <h3>Technology</h3>
          <ul>
            {TECHNOLOGIES.map((tech, i) => (
              <li key={i}>{tech}</li>
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
            for building engaging web interfaces. I am the type of Frontend Dev
            who likes to think beyond the code, and focus on how my code
            co-create experiences with the users.
          </p>

          <p>
            I come from a{' '}
            <span className="emphasis">
              Museum and Social Science background
            </span>{' '}
            and hold a{' '}
            <span className="emphasis">
              Master's degree in Tourism, Society and Environment
            </span>{' '}
            from Wageningen University in the Netherlands. As an Education and
            Program Coordinator, I was able to leverage my academic background
            to curate exciting public programs at the intersection of academia
            and public history. As a Smithsonian intern, I utilized my
            statistics training to conduct Program Impact Evaluation.{' '}
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
              <StyledLink
                to="reference"
                spy={true}
                smooth={true}
                duration={800}
                offset={-300}
              >
                See my references :)
              </StyledLink>
            </CustomToolTip>
          </p>
          <h4>Why Frontend Engineering?</h4>
          <p>
            Everyone breaks into tech for their reason, my lightbulb moment was
            seeing the final product of a museum exhibit that I helped
            coordinate into the Matterport.{' '}
            <span className="emphasis">
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
              <StyledLink
                spy={true}
                smooth={true}
                duration={800}
                offset={-300}
                to="projects"
              >
                See my projects :)
              </StyledLink>
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
          <br />
          <h5 style={{ textAlign: 'center' }}>
            ⚡ Created with React and Styled-Components ⚡
          </h5>
        </TextContainer>
      </AboutInfo>
    </AboutMeContainer>
  );
}

export default memo(AboutMe);