import styled from 'styled-components';
import { colors } from '../../static/colors';

const SlideShow = styled.div`
  margin: 0 auto;
  overflow: hidden;
  max-width: 500px;
`;

const SlideShowSlider = styled.div`
  white-space: nowrap;
  /* display: flex; */
  transition: ease 1000ms;
`;

const SlideShowDots = styled.div`
  text-align: center;
`;

const SlideShowDot = styled.div`
  display: inline-block;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  cursor: pointer;
  margin: 15px 7px 0px;
  background-color: ${(props) =>
    props.active === true ? colors.oliveGreen : colors.lightGray};
`;

const Slide = styled.div`
  display: inline-block;
  height: 200px;
  width: 100%;
  border-radius: 40px;
  background-color: ${colors.darkGreen};
`;

const Name = styled.h2`
  color: ${colors.offWhite};
`;
const Info = styled.p`
  color: ${colors.offWhite};
`;

const Comment = styled.p`
  font-size: 0.7em;
  width: 300px;
  color: ${colors.offWhite};
  background-color: green;
`;

export {
  SlideShow,
  SlideShowSlider,
  SlideShowDots,
  SlideShowDot,
  Slide,
  Name,
  Info,
  Comment,
};
