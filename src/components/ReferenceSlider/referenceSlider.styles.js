import styled from 'styled-components';
import { colors } from '../../static/colors';

const SlideShow = styled.div`
  margin: 0 auto;
  overflow: hidden;
  max-width: 500px;
  margin-top: 30px;
`;

const SlideShowSlider = styled.div`
  white-space: nowrap;
  transition: linear 1000ms;
  -webkit-overflow-scrolling: touch;
`;

const Slide = styled.div`
  white-space: normal;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
  width: 98%;
  margin-left: 1%;
  margin-right: 1%;
  border-radius: 40px;
  background-color: ${colors.darkGreen};
`;

const Name = styled.h2`
  color: ${colors.offWhite};
  margin: 0.25em 0;
`;

const Comment = styled.p`
  font-size: 0.8em;
  color: ${colors.offWhite};
  margin: 0 2em 2em 2em;
`;

const SlideShowDots = styled.div`
  text-align: center;
`;

const SlideShowDot = styled.div`
  display: inline-block;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  cursor: pointer;
  margin: 15px 7px 0px;
  background-color: ${(props) =>
    props.active === true ? colors.darkBrown : colors.lightGray}90;
`;

export {
  SlideShow,
  SlideShowSlider,
  SlideShowDots,
  SlideShowDot,
  Slide,
  Name,
  Comment,
};
