import styled, { keyframes } from 'styled-components';
import headshot from './img/headshot.jpg';
import { colors } from '../../static/colors.js';

const slideUp = keyframes`
 from { opacity: 0, right: -4.5rem;
      top: 0rem;}
 to { opacity: 1;top: -2.75rem;right: -4.5rem}
`;

const Portrait = styled.div`
  background-color: red;
  height: 300px;
  width: 200px;
  border-radius: 1em;
  background-image: url(${headshot});
  background-size: 220%;
  background-position-x: 0px;
  background-position-y: -150px;
  background-repeat: no-repeat;
`;

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
  }

  #name,
  .big-emphasis {
    font-weight: 800;
    background-color: ${colors.yellow};
  }

  &:hover {
    .small-emphasis {
      text-decoration: underline wavy 2px ${colors.darkBlue};
      text-underline-offset: 4px;
    }
  }

  #name {
    padding: 0 0.25em;
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
      top: -2.75rem;
      right: -4.5rem;
      animation-name: ${slideUp};
      animation-duration: 400ms;
      animation-iteration-count: initial;
      transition: all 500ms ease-in-out;
    }
  }
`;

const AboutInfo = styled.div`
  width: 80%;
  height: 100%;
  border-radius: 2em 2em 2em 2em;
  background-color: ${colors.oliveGreen}80;
`;

const TextContainer = styled.div`
  margin: 2em;
`;

export { Portrait, AboutMeContainer, AboutInfo, TextContainer, ToolTip };
