import React, { useState, useEffect } from 'react';
import {
  GridItem,
  Heading,
  ButtonGroup,
  Text,
  AnchorButton,
  ListGroup,
  ListItem,
  SectionContainer,
  ModalBackground,
  ModalContent,
} from './index.styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocalSeeIcon from '@mui/icons-material/LocalSee';
import YoutubeEmbed from '../../static/components/YoutubePlayer';
import YouTubeIcon from '@mui/icons-material/YouTube';

const ProjectContainer = ({ project }) => {
  const { name, description, links, technologies, highlights } = project;
  const [open, setOpen] = useState(false);
  const [media, setMedia] = useState(null);

  return (
    <>
      <ModalBackground
        open={open}
        onClick={() => {
          setOpen(false);
          setMedia(null);
        }}
      >
        {open ? (
          <ModalContent>
            {media.type === 'gif' ? (
              <img style={{ width: '100%' }} src={media.src} />
            ) : (
              <YoutubeEmbed embedId={media.src} />
            )}
          </ModalContent>
        ) : null}
      </ModalBackground>

      <GridItem>
        <Heading>{name}</Heading>
        <SectionContainer>
          <div style={{ flexBasis: '55%' }}>
            <Text variant="title">Description</Text>
            <Text>{description}</Text>
          </div>
          <div style={{ flexBasis: '45%' }}>
            <Text variant="title">Technology</Text>
            <ListGroup variant="technology">
              {technologies.map((tech, i) => (
                <ListItem key={i} variant="technology">
                  {tech}
                </ListItem>
              ))}
            </ListGroup>
          </div>
        </SectionContainer>

        <Text variant="title">Highlights</Text>
        <ListGroup variant="highlight">
          {highlights.map((highlight, i) => (
            <ListItem variant="highlight" key={i}>
              {highlight}
            </ListItem>
          ))}
        </ListGroup>

        <ButtonGroup>
          {!links.demo ? null : (
            <AnchorButton target="_blank" href={links.demo}>
              <p style={{ fontSize: '1em' }}>LIVE DEMO</p>
            </AnchorButton>
          )}
          <AnchorButton target="_blank" href={links.github}>
            <GitHubIcon style={{ fontSize: '1.5em' }} />
          </AnchorButton>

          {!links.gif ? null : (
            <AnchorButton
              onClick={() => {
                setOpen(true);
                setMedia({ type: 'gif', src: links.gif });
              }}
            >
              <LocalSeeIcon style={{ fontSize: '1.5em' }} />
            </AnchorButton>
          )}
          {!links.youtube ? null : (
            <AnchorButton
              onClick={() => {
                setOpen(true);
                setMedia({ type: 'youtube', src: links.youtube });
              }}
            >
              <YouTubeIcon style={{ fontSize: '1.5em' }} />
            </AnchorButton>
          )}
        </ButtonGroup>
      </GridItem>
    </>
  );
};

export default ProjectContainer;
