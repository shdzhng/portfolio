import styled, { keyframes } from 'styled-components';
import headshot from './img/headshot.jpg';
import ribbon from './img/ribbon.svg';
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
    transform: rotate(30deg);
}to{
    transform: rotate(60deg);
}`;
const backgroundImageZoom = keyframes`
from{
background-size: 210%;
  background-position-y: -220px;
}to{
    background-size: 220%;
      background-position-y: -230px;
}
`;
const windblowing = keyframes`
from {transform:rotate(-78deg) }to {transform:rotate(-90deg);}`;

const IconGroup = styled.div`
  display: flex;
  margin-top: 1em;
  gap: 0.5em;
`;

const IconContainer = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  padding: 0.25em;
  background-color: ${colors.darkBlue};
  border-radius: 0.5em;
  color: ${colors.offWhite};
  transition: all 400ms ease;
  text-decoration: none;
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
  background-position-y: -230px;
  background-repeat: no-repeat;
  animation: ${backgroundImageZoom} 1000ms ease;
  z-index: 5;

  @media screen and (max-width: 1200px) {
    background-position-y: -500px;
    border-radius: 1em 0em 0em 1em;
    height: 100%;
    animation: none;
  }
  @media screen and (max-width: 1100px) {
    background-position-y: -350px;
  }
  @media screen and (max-width: 850px) {
    background-position-y: -250px;
  }
  @media screen and (max-width: 600px) {
    background-position-y: -100px;
  }
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 23%;
  border-radius: 1em;
  box-shadow: 3px 5px 5px 0px rgba(0, 0, 0, 0.25);

  @media screen and (max-width: 1200px) {
    flex-direction: row;
    height: fit-content;
  }

  #banner {
    position: absolute;
    animation: ${windblowing} 3s ease-in-out alternate infinite;
    padding: 2px;
    top: 4em;
    background-color: ${colors.yellow};
    height: 1em;
    z-index: 4;
    width: 1em;
    border-radius: 1em;
    left: -0.15em;

    @media screen and (max-width: 750px) {
      display: none;
    }

    &:hover {
      animation-play-state: paused;
      &:before {
        content: 'Click to Email';
      }
    }
    &:before,
    &:after {
      cursor: pointer;
      position: absolute;
    }
    &:before {
      content: '#OpenToWork';
      color: ${colors.offWhite};
      top: 0em;
      left: -7.5em;
      margin: 0 auto;
      height: 200px;
      font-size: 20px;
      font-weight: 700;
      z-index: 9;
    }
    &:after {
      top: -5.7em;
      left: -11.5em;
      content: '';
      width: 200px;
      height: 200px;
      transform: rotate(45deg);
      background-image: url(${ribbon});
      background-size: 100%;
      z-index: -1;
    }
  }
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
  @media screen and (max-width: 1200px) {
    border-radius: 0em 1em 1em 0em;
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
  @media screen and (max-width: 1200px) {
    #filler {
      display: none;
    }
    ul {
      margin-bottom: 2em;
    }
  }
`;

const AboutMeContainer = styled.div`
  margin-top: 2em;
  padding: 2em;
  border-radius: 2em;
  border: 4px dotted ${colors.darkBlue};
  width: 60vw;
  height: fit-content;
  min-width: 400px;
  background-color: ${colors.lightBlue}90;
  display: flex;
  line-height: 1.3em;
  gap: 1em;
  justify-content: space-evenly;
  font-weight: 400;
  color: ${colors.black};
  transition: max-height 1s;
  position: relative;
  h4 {
    margin: 0.5em 0;
  }

  #matterport-link {
    color: ${colors.darkBlue};
    font-weight: 500;
    &:link {
      color: ${colors.darkGreen};
    }
    &:visited {
      color: ${colors.darkGreen};
    }
  }

  p {
    margin-bottom: 0.7em;
  }

  .emphasis {
    color: ${(props) => (props.show ? colors.offWhite : 'transparent')};
    font-weight: 700;
    background-position: right;
    background-size: ${(props) => (props.show ? '0% 100%' : '100% 100%')};
    background-color: ${(props) => (props.show ? colors.darkGreen : 'none')};
    background-image: linear-gradient(${colors.red}, ${colors.red});
    background-repeat: no-repeat;
    transition-property: background-size, background-color, color;
    transition-duration: 500ms, 500ms, 500ms;
    transition-delay: 0s, 0ms, 0ms;
    transition-timing-function: ease-in-out;
  }

  h1 {
    position: relative;
    &:after {
      position: absolute;
      content: '👋🏻';
      animation: ${waveHand} 2s ease-out alternate infinite;
    }
  }

  @media screen and (max-width: 1200px) {
    width: 65vw;
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
  box-shadow: 3px 5px 5px 0px rgba(0, 0, 0, 0.25);
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