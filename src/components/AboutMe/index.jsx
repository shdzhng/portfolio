import React from 'react';
import {
  Portrait,
  TextContainer,
  AboutMeContainer,
  AboutInfo,
  ToolTip,
  IconContainer,
  IconGroup,
} from './aboutme.styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function AboutMe() {
  return (
    <AboutMeContainer>
      <Portrait />
      <AboutInfo>
        <TextContainer>
          <h1>
            Hello! My name is{' '}
            <ToolTip message='💡 pronounced like a "tv show"' id="name">
              Shou
            </ToolTip>{' '}
          </h1>
          <p>
            I am a self-taught{' '}
            <span className="big-emphasis">Junior Frontend Developer</span>{' '}
            based in
            <span className="big-emphasis">🌴 Los Angeles 🌴</span> with a
            passion for building engaging web interfaces. I am the type of
            software engineer who likes to think beyond the code, and focus on
            how my code co-create experiences with the users.
          </p>
          <br />

          <p>
            I come from a Social Science background and hold a{' '}
            <span className="big-emphasis">
              Master's degree in Tourism, Society and Environment{' '}
            </span>{' '}
            from Wageningen University in the Netherlands. As a museum
            professional, I was able to leverage my academic background to work
            as an{' '}
            <span className="small-emphasis">
              {' '}
              Education and Program Coordinator
            </span>{' '}
            and interned to conduct:{' '}
            <span className="small-emphasis"> Impact Evaluation</span>, and{' '}
            <span className="small-emphasis">Exhibiton Research</span>. As you
            might be able to tell, I am someone who loves to get deeply involved
            and see all aspects of an organizations operation! I'd love to
            collaborate closely with UX/UI researchers to drive key decisions.
          </p>
          <br />

          <p>Check out my published blog pieces on Cultural and Heritage!</p>

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
