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
  margin-top: 12px;
  gap: 6px;
`;

const IconContainer = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  padding: 0.25em;
  background-color: ${colors.red};
  border-radius: 0.5em;
  color: ${colors.offWhite};
  transition: all 400ms ease;
  text-decoration: none;
  &:hover {
    background-color: ${colors.black};
    color: ${colors.offWhite};
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
    background-position-y: 0px;
  }
`;

const LeftContainer = styled.aside`
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
      font-family: 'Lato', sans-serif;
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
  height: 45vh;
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
    margin-top: 20px;
    flex-basis: 20%;
    text-align: center;
  }

  ul {
    margin: 0;
    display: flex;
    justify-self: flex-start;
    flex-direction: column;
    padding-left: 0.5em;
    flex-grow: 0;
    flex-basis: 50%;
    list-style-type: none;
    min-width: 250px;
    padding: 15px 0 0 15px;
    li {
      font-size: 16px;
      font-weight: 600;
      &:before {
        content: '🚀 ';
      }
    }
  }

  @media screen and (max-width: 500px) {
    ul li {
      font-size: 12px;
    }
    h3 {
      margin: 0;
    }
  }

  @media screen and (max-width: 1200px) {
    border-radius: 0em 1em 1em 0em;
    justify-content: space-around;
    ul {
      font-size: 16px;
      margin-bottom: 0;
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
  z-index: 999;
  padding: 0 12px;
  background-color: ${colors.yellow};
  color: ${colors.black};
  transition: all 250ms ease-in-out;
  &:hover {
    &:before {
      animation-play-state: running;
      visibility: visible;
      content: '${(props) => (props.message ? props.message : 'no content')}';
      position: absolute;
      font-size: 16px;
      font-weight: 500;
      padding: 6px;
      width: 200px;
      border-radius: 1em;
      text-align: center;
      background-color: ${colors.red};
      color: ${colors.offWhite};
      top: -36px;
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
  display: flex;
  flex-direction: column;
  gap: 12px;

  .about-header {
    flex-basis: 10%;
    text-align: center;
    font-size: 30px;
    font-weight: 600;
    width: 100%;
    height: 100%;
    box-shadow: 3px 5px 5px 0px rgba(0, 0, 0, 0.25);
    border-radius: 30px 30px 30px 30px;
    background-color: ${colors.offWhite};
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1200px) {
      p {
        font-size: 20px;
        padding: 12px 0;
      }
    }
  }

  &:hover {
    .card {
      transform: rotateY(180deg);
    }
  }

  .card {
    height: 100%;
    width: 100%;
    transform-style: preserve-3d;
    transition: all 1s ease-in-out;
    position: relative;

    h4 {
      margin: 12px 0;
    }

    .emphasis {
      background-color: ${colors.yellow}60;
    }

    @media screen and (max-width: 1200px) {
      height: fit-content;
      transition: none;
      &:before,
      &:after {
        display: none;
      }

      &:hover {
        transform: none;
      }
    }

    .card-front,
    .card-back {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      border-radius: 30px 30px 30px 30px;
      box-shadow: 3px 5px 5px 0px rgba(0, 0, 0, 0.25);

      @media screen and (max-width: 1200px) {
        position: static;
        height: fit-content;
        backface-visibility: visible;
      }
    }

    .card-front {
      background-color: ${colors.offWhite};
      &:after {
        content: '';
        position: absolute;
        display: block;
        bottom: 0;
        right: 0;
        border-width: 0 50px 50px 0;
        transform: rotate(-90deg);
        -moz-border-radius: 0 0 0 5px;
        border-radius: 0 0 0 25px;
        border-style: solid;
        border-color: ${colors.red};
        z-index: 1;
      }

      &:before {
        content: '';
        position: absolute;
        display: block;
        bottom: 10px;
        right: 10px;
        z-index: 2;
        border-width: 0 50px 50px 0;
        transform: rotate(-90deg);
        -moz-border-radius: 0 0 0 5px;
        border-radius: 0 0 0 25px;
        border-style: solid;
        border-color: ${colors.offWhite};
      }

      @media screen and (max-width: 1200px) {
        height: fit-content;
        transition: none;
        &:before,
        &:after {
          display: none;
        }

        &:hover {
          transform: none;
        }
      }
    }

    .card-back {
      background-color: ${colors.offWhite};
      transform: rotateY(180deg);
      @media screen and (max-width: 1200px) {
        transform: rotateY(0deg);
      }
    }

    .card-content {
      margin: 30px 24px;
      display: flex;
      flex-direction: column;
      height: 100%;
      line-height: 24px;
      font-size: 18px;
      @media screen and (max-width: 1400px) {
        line-height: 18px;
        font-size: 14px;
      }
      @media screen and (max-width: 1200px) {
        line-height: 15px;
        font-size: 13px;
      }

      ul {
        margin: 0;
        padding: 0;
        list-style: none;
      }

      ul li {
        padding: 2px;
      }

      .card-footer {
        text-align: center;
      }

      @media screen and (max-width: 1200px) {
        margin-top: 0;
        padding: 24px 6px;
      }
    }
  }
`;

export {
  Portrait,
  AboutInfo,
  IconGroup,
  AboutMeContainer,
  LeftContainer,
  TechstackContainer,
  IconContainer,
  ToolTip,
  StyledLink,
};
