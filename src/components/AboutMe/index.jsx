import React from 'react';
import {
  Portrait,
  TextContainer,
  AboutMeContainer,
  AboutInfo,
  ToolTip,
} from './aboutme.styles';

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
            </ToolTip>
            👋🏻{' '}
          </h1>
          <p>
            I am a self-taught{' '}
            <span className="big-emphasis">Junior Frontend Developer</span>{' '}
            based in
            <span className="small-emphasis">🌴 Los Angeles 🌴</span> with a
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
            <span className="small-emphasis">Exhibiton Research</span>.
          </p>
          <br />
          <p>
            As you might be able to tell, I am someone who loves to get deeply
            involved and see all aspects of an organizations operation!
          </p>

          <h3>Check out my published blog pieces on Cultural and Heritage!</h3>

          <p></p>
        </TextContainer>
      </AboutInfo>
    </AboutMeContainer>
  );
}

export default AboutMe;
