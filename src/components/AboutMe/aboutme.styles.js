import styled, { keyframes } from 'styled-components';
import headshot from './img/headshot.jpg';
import plantsvg from './img/plant.svg';
import { colors } from '../../static/colors.js';

const slideUp728pxup = keyframes`
 from { opacity: 0, right: -4.5em;
      top: 0rem;}
 to { opacity: 1;top: -2.75em;right: -4.5em}
`;

const slideUp728pxdown = keyframes`
 from { opacity: 0, right: -4.5em;
      top: 0rem;}
 to { opacity: 1;top: -3.75em;right: -4.5em}
`;

const IconGroup = styled.div`
  display: flex;
  margin-top: 1em;
  gap: 0.5em;
`;

const IconContainer = styled.a`
  font-size: 2em;
  padding: 0.25em;
  background-color: ${colors.darkBlue};
  border-radius: 0.5em;
  color: ${colors.offWhite};
  transition: all 400ms ease;
  &:hover {
    background-color: ${colors.offWhite};
    color: ${colors.darkBlue};
  }
`;

const backgroundImageZoom = keyframes`
from{
background-size: 210%;
  background-position-y: -151px;
}to{
    background-size: 220%;
      background-position-y: -150px;
}
`;

const Portrait = styled.div`
  height: 300px;
  width: 200px;
  border-radius: 1em;
  background-image: url(${headshot});
  background-size: 220%;
  background-position-x: 0px;
  background-position-y: -150px;
  background-repeat: no-repeat;
  animation: ${backgroundImageZoom} 1000ms ease;
`;

const waveHand = keyframes`
from{
    transform: rotate(10deg);
}to{
    transform: rotate(60deg);
}`;

const AboutMeContainer = styled.div`
  margin-top: 2em;
  padding: 2em;
  border-radius: 2em;
  border: 4px dotted ${colors.darkBlue};
  width: 80%;
  height: fit-content;
  background-color: ${colors.lightBlue};
  display: flex;
  line-height: 1.4em;
  gap: 1em;
  justify-content: space-evenly;
  font-weight: 500;
  color: ${colors.black};

  .small-emphasis {
    transition: all 500ms linear;
    text-decoration: underline wavy 2px ${colors.offWhite}00;
    text-underline-offset: 4px;
  }

  h1 {
    position: relative;
    &:after {
      position: absolute;
      content: '👋🏻';
      animation: ${waveHand} 1000ms ease-out alternate infinite;
    }
  }

  #name,
  .big-emphasis {
    font-weight: 800;
    background-color: ${colors.yellow};
  }

  &:hover {
    .small-emphasis {
      text-decoration: underline wavy 2px ${colors.offWhite};
    }
  }

  #name {
    padding: 0 0.25em;
  }

  @media screen and (max-width: 728px) {
    flex-direction: column;
    font-size: 0.8em;
    line-height: 1.4em;
    h1 {
      font-size: 1.2em;
    }
  }
`;

const ToolTip = styled.span`
  padding: 0 0.25em;
  position: relative;

  &:hover {
    &:before {
      animation-play-state: running;
      visibility: visible;
      content: '${(props) => (props.message ? props.message : 'no content')}';
      position: absolute;
      font-size: 0.5em;
      font-weight: 500;
      padding: 0.5em;
      border-radius: 1em;
      width: 260px;
      text-align: center;
      background-color: white;
      top: -2.75em;
      right: -4.5em;
      animation-name: ${slideUp728pxup};
      animation-duration: 400ms;
      animation-iteration-count: initial;
      transition: all 500ms ease-in-out;
    }
  }

  @media screen and (max-width: 728px) {
    &:hover {
      &:before {
        animation-name: ${slideUp728pxdown};
        top: -3.75em;
        width: 150px;
      }
    }
  }
`;

const AboutInfo = styled.div`
  width: 80%;
  height: 100%;
  border-radius: 2em 2em 2em 2em;
  background-color: ${colors.oliveGreen}80;
  @media screen and (max-width: 728px) {
    width: 100%;
  }
`;

const TextContainer = styled.div`
  margin: 2em;
`;

export {
  Portrait,
  IconContainer,
  AboutMeContainer,
  AboutInfo,
  IconGroup,
  TextContainer,
  ToolTip,
};
