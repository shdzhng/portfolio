import styled from 'styled-components';
import { colors } from '../../static/colors';

const TimelineContainer = styled.div`
  margin-top: 35px;
  padding: 15px;
  display: grid;
  grid-template-columns: 40% auto;
  justify-content: center;
  border-radius: 2em;
  display: flex;
  @media screen and (min-width: 728px) {
    display: block;
    width: 70vw;
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
  left: -7%;
  transition: border-color 750ms ease;
  @media screen and (min-width: 728px) {
    width: 13px;
    height: 13px;
    top: -28px;
    left: calc(50% - 18px);
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

const Title = styled.h5`
  color: inherit;
  font-weight: 900;
`;

const SmallText = styled.p`
  font-size: 0.75em;
`;

const Info = styled.p`
  font-size: 0.8em;
  color: inherit;
`;

const ProjectContainer = styled.ul`
  margin-top: 0.5em;
  list-style-position: inside;
  list-style-type: none;
  padding-left: 0;
`;

const ProjectListItem = styled.li`
  color: inherit;
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
  color: inherit;
  background-color: ${colors.offWhite}20;
  width: fit-content;
  height: fit-content;
  font-size: 0.4em;
  border-radius: 20px;
  background-repeat: no-repeat;
  background-position: left;
  background-size: 0% 100%;
  background-image: linear-gradient(to right, #9ae6b4, yellow);
  padding-bottom: thickness;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
  transition: background-size 0.3s ease-in-out;
`;

const Container = styled.div`
  background-color: ${colors.oliveGreen};
  position: relative;
  border-radius: 0.75em;
  height: fit-content;
  padding: 1em;
  align-self: auto;
  color: ${colors.offWhite};
  box-shadow: 3px 3px 10px ${colors.darkGreen}60;
  transition-timing-function: ease-in;
  transition: all 1.5s ease;
  transition: box-shadow 150ms ease-in;
  &:hover {
    box-shadow: 8px 8px 15px ${colors.darkGreen}60;
    background-color: ${colors.yellow};
    color: ${colors.darkGreen};
    &:after {
      background-color: ${colors.yellow};
    }
  }
  &:hover ${TimeLinePoint} {
    border-color: ${colors.oliveGreen};
    background-color: ${colors.yellow};
  }
  &:hover ${Badge} {
    background-size: 100% 100%;
    color: black;
    font-weight: 600;
    transition: 0.3s ease-out;
  }
  &:after {
    content: ' ';
    background-color: ${colors.oliveGreen};
    position: absolute;
    left: -6px;
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
};
