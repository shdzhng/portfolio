import styled, { keyframes } from 'styled-components';
import headshot from './img/headshot.jpg';
import plantsvg from './img/plant.svg';
import polkadot from './img/polkadot.svg';
import { colors } from '../../static/colors.js';
import { Link } from 'react-scroll';

//animations
const slideUp728pxup = keyframes`
 from { opacity: 0, right: -4.5em;
      top: 0rem;}
 to { opacity: 1;top: -2.75em;right: -4.5em}
`;
const waveHand = keyframes`
from{
    transform: rotate(10deg);
}to{
    transform: rotate(60deg);
}`;
const backgroundImageZoom = keyframes`
from{
background-size: 210%;
  background-position-y: -200px;
}to{
    background-size: 220%;
      background-position-y: -240px;
}
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

const Portrait = styled.div`
  height: 300px;
  width: 100%;
  border-radius: 1em 1em 0em 0em;
  background-image: url(${headshot});
  background-size: 220%;
  background-position-x: 0px;
  background-position-y: -240px;
  background-repeat: no-repeat;
  animation: ${backgroundImageZoom} 1000ms ease;
  @media screen and (max-width: 728px) {
    animation: none;
    height: 400px;
    background-size: 210%;
    background-position-y: -330px;
  }
  @media screen and (max-width: 550px) {
    height: 300px;
    background-size: 210%;
    background-position-y: -250px;
  }
  @media screen and (max-width: 350px) {
    height: 200px;
    background-size: 210%;
    background-position-y: -150px;
  }
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 23%;
`;

const TechstackContainer = styled.div`
  background-color: ${colors.mediumBlue1};
  border-radius: 0em 0em 1em 1em;
  height: 100%;
  flex-shrink: 10;
  display: flex;
  flex-direction: column;
  color: ${colors.offWhite};
  #filler {
    margin-top: 1em;
    border-radius: 0em 0em 1em 1em;
    background-color: ${colors.offWhite};
    mask-image: url(${polkadot});
    mask-size: 100%;
    width: 100%;
    height: 100%;
    position: relative;
    flex-grow: 1;
  }
  h3 {
    margin: 5px;
    flex-basis: 20%;
    text-align: center;
    position: relative;
  }
  ul {
    margin: 5px;
    display: flex;
    justify-self: flex-start;
    flex-direction: column;
    padding-left: 0.5em;
    flex-grow: 0;
    list-style-type: none;
    min-width: 250px;
    li {
      font-weight: 500;
      &:before {
        content: '🚀 ';
      }
    }
  }
  @media screen and (max-width: 500px) {
    ul {
      margin-bottom: 2em;
      display: grid;
      grid-template-columns: auto auto;
    }
    #filler {
      display: none;
    }
  }
  @media screen and (min-width: 1000px) {
    h3 {
      margin-top: 1em;
      margin-bottom: 0;
      padding: 0;
    }
  }
`;

const AboutMeContainer = styled.div`
  margin-top: 2em;
  padding: 2em;
  border-radius: 2em;
  border: 4px dotted ${colors.darkBlue};
  width: 60vw;
  max-height: fit-content;
  background-color: ${colors.lightBlue}90;
  display: flex;
  line-height: 1.4em;
  gap: 1em;
  justify-content: space-evenly;
  font-weight: 500;
  color: ${colors.black};
  transition: max-height 1s;

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

  &:hover {
    .small-emphasis {
      text-decoration: underline wavy 2px ${colors.offWhite};
    }
  }

  @media screen and (max-width: 1200px) {
    width: 65vw;
  }
  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }

  @media screen and (max-width: 728px) {
    font-size: 0.8em;
    line-height: 1.4em;
    width: 80vw;
    h1 {
      font-size: 1.2em;
    }
  }
`;

const StyledLink = styled(Link)`
  cursor: pointer;
  font-weight: 800;
  background-color: ${colors.yellow};
`;

const ToolTip = styled.span`
  position: relative;
  background-color: ${colors.yellow};
  &:hover {
    &:before {
      animation-play-state: running;
      visibility: visible;
      content: '${(props) => (props.message ? props.message : 'no content')}';
      position: absolute;
      font-size: 12px;
      font-weight: 500;
      padding: 0.5em;
      width: 200px;
      border-radius: 1em;
      text-align: center;
      background-color: ${colors.offWhite};
      top: -3em;
      right: ${(props) => (props.right ? props.right : '-4.5em')};
      animation-name: ${(props) =>
        props.animationWide ? props.animationWide : slideUp728pxup};
      animation-duration: 400ms;
      animation-iteration-count: initial;
      transition: all 500ms ease-in-out;
    }
  }

  @media screen and (max-width: 728px) {
    &:hover {
      &:before {
        content: none;
        animation: none;
      }
    }
  }
`;

const AboutInfo = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 2em 2em 2em 2em;
  background-color: ${colors.oliveGreen}80;
`;

const TextContainer = styled.div`
  margin: 2em;
`;

export {
  Portrait,
  AboutInfo,
  IconGroup,
  TextContainer,
  AboutMeContainer,
  LeftContainer,
  TechstackContainer,
  IconContainer,
  ToolTip,
  StyledLink,
};
