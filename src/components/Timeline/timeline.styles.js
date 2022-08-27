import styled from 'styled-components';
import { colors } from '../../static/colors';

const TimelineContainer = styled.div`
  margin-top: 35px;
  padding: 15px;
  display: grid;
  grid-template-columns: 40% auto;
  justify-content: center;
  @media screen and (min-width: 728px) {
    display: block;
    width: 70vw;
  }
`;
const ContentContainer = styled.div`
  margin-top: 30px;
  position: relative;
  padding: 25px 25px 25px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style: none;
  gap: 1em;
  @media screen and (min-width: 728px) {
    margin-top: 0;
    flex-direction: row;
    padding: 15px 25px 25px 25px;
  }
`;

const Container = styled.div`
  background-color: ${colors.oliveGreen};
  position: relative;
  border-radius: 0.75em;
  height: fit-content;
  padding: 1rem;
  align-self: auto;
  transition: 1.5s;
  border: 1px solid green;
  &:after {
    content: ' ';
    background-color: ${colors.oliveGreen};
    position: absolute;
    left: -7.5px;
    top: calc(50% - 15px);
    transform: rotate(45deg);
    width: 12px;
    height: 12px;
  }
  @media screen and (min-width: 728px) {
    margin-top: 0px;
    align-self: flex-start;
    position: relative;
    width: 100%;
    &:after {
      left: calc(50% - 15px);
      top: -6px;
    }
  }
`;

const TimeLine = styled.div`
  background: ${colors.darkBrown};
  width: 4px;
  border-radius: 12px;
  position: relative;
  justify-self: end;
  @media screen and (min-width: 728px) {
    width: 100%;
    height: 4px;
  }
`;

const TimeLinePoint = styled.div`
  border: none;
  position: absolute;
  border-radius: 50%;
  background: ${colors.oliveGreen};
  border: 3px solid ${colors.offWhite};
  width: 13px;
  height: 13px;
  top: calc(45% - 13px);
  left: -13%;
  @media screen and (min-width: 728px) {
    width: 13px;
    height: 13px;
    top: -28px;
    left: calc(50% - 18px);
  }
`;

const TimelineInnerLine = styled.span`
  position: absolute;
  background: blue;
  width: 4px;
  height: 0%;
  top: 0%;
  left: 0%;
  transition: 1s linear;
  @media screen and (min-width: 728px) {
    position: absolute;
    width: 0%;
    height: 4px;
    top: 0%;
    left: 0%;
    transition: 1s linear;
    border-radius: 999px;
  }
`;

const Title = styled.h5`
  color: ${colors.offWhite};
  font-weight: 900;
`;

const SmallText = styled.p`
  font-size: 0.75em;
`;

const Info = styled.p`
  font-size: 0.8em;
  color: ${colors.offWhite};
`;

const ProjectContainer = styled.ul`
  margin-top: 0.5em;
  list-style-position: inside;
  list-style-type: none;
  padding-left: 0;
`;

const ProjectListItem = styled.li`
  color: ${colors.offWhite};
  font-size: 0.8em;
  &:before {
    content: '⭐';
    margin-right: 0.4em;
    font-size: 0.8em;
  }
`;

const Badge = styled.div`
  position: absolute;
  top: 1em;
  right: 1em;
  padding: 0.75em 1.25em;
  mask-position: bottom;
  color: ${colors.offWhite};
  background-color: ${colors.offWhite}20;
  width: fit-content;
  height: fit-content;
  font-size: 0.4em;
  border-radius: 20px;
`;

export {
  Container,
  Info,
  ProjectListItem,
  Badge,
  Title,
  SmallText,
  TimeLine,
  TimelineContainer,
  ProjectContainer,
  ContentContainer,
  TimeLinePoint,
  TimelineInnerLine,
};
