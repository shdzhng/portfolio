import React, { memo } from 'react';
import { IconContainer, IconGroup } from './aboutme.styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const RESUME_URL =
  'https://drive.google.com/file/d/1I-YRbm3rctfqkhJaBWNAWRCHEFPPn30t/view?usp=sharing';

function CardBackView() {
  return (
    <div>
      <h4>Why Frontend Engineering?</h4>
      <p>
        Everyone breaks into tech for their reason, my lightbulb moment was
        seeing the final product of a museum exhibit that I helped coordinate
        into the Matterport.{' '}
        <span className="emphasis">
          I was thoroughly impressed by the myriad of ways that technology
          empowered the museum{' '}
        </span>{' '}
        in terms of the limitations of space, engagement, program/exhibit
        scalability, and accessibility that I decided to make the transition.
      </p>
      <p>
        Looking forward, I am excited to branch out and explore all areas of
        software development. I am particularly intrigued by data visualization
        and animation.
      </p>
      <h4 style={{ marginBottom: '0px' }}>When I'm not coding I enjoy:</h4>
      <ul>
        <li>🪴 Tending my young garden</li>
        <li>🎲 Boardgame/PC game nights with friends and co-workers </li>
        <li>🥾 Hiking, Camping, Photography</li>
        <li>📖 Reading memoirs and other non-fictions</li>
      </ul>

      <br />
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
          <span
            style={{
              fontSize: '20px',
              margin: '0',
              fontWeight: '900',
              padding: '5px',
            }}
          >
            CV
          </span>
        </IconContainer>
      </IconGroup>
      <br />
      <h5 className="card-footer">
        ⚡ Handmade with React and Styled-Components ⚡
      </h5>
    </div>
  );
}

export default memo(CardBackView);
