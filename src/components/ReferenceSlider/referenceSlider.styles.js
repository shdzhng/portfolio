import styled from 'styled-components';
import { colors } from '../../static/colors';

const SlideShow = styled.div`
  margin: 0 auto;
  overflow: hidden;
  width: 100%;
`;

const Divider = styled.div`
  content: '';
  background-color: ${colors.yellow};
  width: 5px;
  height: 100%;
`;

const SlideShowSlider = styled.div`
  white-space: nowrap;
  transition: linear 1000ms;
  -webkit-overflow-scrolling: touch;
  height: 100%;
  cursor: grab;
`;

const Comment = styled.p`
  font-size: 1em;
  color: ${colors.offWhite};
  margin: 0 2em 2em 2em;
  text-align: justify;
  overflow-wrap: break-word;
  word-wrap: break-word;
  -ms-word-break: break-all;
  word-break: break-word;
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
  .bold {
    font-weight: 800;
  }

  .underline {
    background-position: bottom left;
    background-size: 0% 100%;
    background-image: ${`linear-gradient(${colors.yellow}, ${colors.yellow})`};
    padding-bottom: 2px;
    display: inline;
    background-repeat: no-repeat;
    transition: all 500ms ease-in-out;
  }

  @media screen and (max-width: 728px) {
    text-align: left;
  }
`;

const Slide = styled.div`
  white-space: normal;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  margin-left: 1%;
  margin-right: 1%;
  border-radius: 40px;
  background-color: ${colors.darkGreen};
  height: 100%;
  &:hover ${Comment} {
    .underline {
      background-size: 102% 102%;
      color: ${colors.darkGreen};
    }
  }
`;

const SlideShowDots = styled.div`
  text-align: center;
  margin-top: 50px;
`;

const SlideShowDot = styled.div`
  display: inline-block;
  display: flex;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  margin: 5px 7px;
  background-color: ${(props) =>
    props.active === true
      ? colors.red
      : props.pause === true
      ? colors.darkGreen
      : colors.lightGray};
  transition: all 250ms ease-in-out;
  &:hover {
    background-color: ${(props) => (props.active ? colors.red : colors.yellow)};
  }
`;

export {
  SlideShow,
  SlideShowSlider,
  SlideShowDots,
  SlideShowDot,
  Slide,
  Comment,
  Divider,
};
