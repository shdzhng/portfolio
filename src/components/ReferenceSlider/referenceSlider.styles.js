import styled from 'styled-components';
import { colors } from '../../static/colors';
import { animated } from 'react-spring';

const SlideShow = styled.div`
  margin: 0 auto;
  overflow: hidden;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  background-color: ${colors.darkBrown}10;
  padding: 1em 0;
  border-radius: 2em;
  width: 60vw;
  height: fit-content;
  @media screen and (max-width: 728px) {
    width: 90vw;
  }
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
  line-height: 23px;
  &:before {
    content: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='%23fefae0' viewBox='0 0 24 24'><path d='M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z'/></svg>");
    margin-right: 10px;
  }

  &:after {
    content: url("data:image/svg+xml;utf8,  <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23fefae0'  viewBox='0 0 24 24'><path d='M11 9.275c0 5.141-3.892 10.519-10 11.725l-.984-2.126c2.215-.835 4.163-3.742 4.38-5.746-2.491-.392-4.396-2.547-4.396-5.149 0-3.182 2.584-4.979 5.199-4.979 3.015 0 5.801 2.305 5.801 6.275zm13 0c0 5.141-3.892 10.519-10 11.725l-.984-2.126c2.215-.835 4.163-3.742 4.38-5.746-2.491-.392-4.396-2.547-4.396-5.149 0-3.182 2.584-4.979 5.199-4.979 3.015 0 5.801 2.305 5.801 6.275z'/></svg>");
    margin-left: 10px;
  }
  .bold {
    font-weight: 600;
    font-size: 1.5em;
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
    font-size: 0.7em;
    height: 30vh;
    overflow-x: hidden;
    overflow-y: auto;
    overflow-wrap: normal;
    word-wrap: normal;
    word-break: normal;
    -ms-word-break: normal;
    -ms-hyphens: none;
    -moz-hyphens: none;
    -webkit-hyphens: none;
    hyphens: none;
    &:before,
    &:after {
      display: none;
    }
    .bold {
      font-size: 1em;
    }
    ::-webkit-scrollbar {
      width: 5px;
      background-color: ${colors.oliveGreen};
    }
    ::-webkit-scrollbar-track {
      background: ${colors.oliveGreen};
    }
    ::-webkit-scrollbar-thumb {
      background: ${colors.offWhite};
    }
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

const Heading = styled.h2`
  color: ${colors.offWhite};
  margin: 0;
  @media screen and (max-width: 728px) {
    font-size: 1em;
  }
`;

const SmallText = styled.p`
  font-size: '0.75em';
  margin: 0;
  color: ${colors.offWhite};
  @media screen and (max-width: 728px) {
    font-size: 0.5em;
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
  SmallText,
  Heading,
  Container,
};
