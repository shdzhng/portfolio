import styled, { keyframes } from 'styled-components';
import { colors } from '../../static/colors';
import { animated } from 'react-spring';

const Container = styled.div`
  right: 130px;
  margin-top: 2em;
  width: 75vw;
  height: fit-content;
  display: inline-flex;
  position: relative;
  transition: all 100ms ease;
  @media screen and (max-width: 728px) {
    flex-direction: column;
    width: 90vw;
    align-items: center;
    gap: 1em;
    min-height: 60vh;
    margin: 0;
    right: 0;
  }
`;
const ModalBackground = styled.div`
  display: ${(props) => (props.open ? 'inline-flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100vw;
  height: 100vh;
  background-color: ${colors.darkGreen}90;
  overflow-y: hidden;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  margin: 15% auto;
  padding: 50px;
  height: fit-content;
  width: 50vw;
  z-index: 3;
  background-color: ${colors.offWhite};
  @media screen and (max-width: 728px) {
    padding: 25px;
    width: 80vw;
  }
`;

const GridItem = styled(animated.div)`
  background-color: ${colors.darkBlue};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2em 2em 2em;
  height: fit-content;
  overflow-y: auto;
  overflow-x: hidden;
  width: 90%;
  z-index: 2;
  transition: all 500ms ease;
  color: ${colors.offWhite};
  border-radius: 1em 3em 3em 1em;
  -webkit-box-shadow: -8px -1px 4px -1px rgba(0, 0, 0, 0.26);
  -moz-box-shadow: -8px -1px 6px -1px rgba(0, 0, 0, 0.26);
  box-shadow: -3px -1px 6px -1px rgba(0, 0, 0, 0.26);
  ::-webkit-scrollbar {
    width: 5px;
    background-color: ${colors.offBlue};
  }
  ::-webkit-scrollbar-track {
    background: ${colors.offBlue};
  }
  ::-webkit-scrollbar-thumb {
    background: ${colors.yellow};
  }
  @media screen and (max-width: 1000px) {
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    padding: 0 1em;
    font-size: 0.9em;
  }
  @media screen and (max-width: 728px) {
    font-size: 0.75em;
  }

  .highlight {
    background-position: bottom left;
    background-size: 100% 0%;
    background-image: ${`linear-gradient(${colors.yellow}, ${colors.yellow})`};
    background-repeat: no-repeat;
    transition: all 500ms ease-in-out;
  }

  &:hover {
    .highlight {
      background-size: 100% 100%;
      color: ${colors.darkBlue};
    }
  }
`;

const SectionContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 1em;
  @media screen and (max-width: 728px) {
    flex-direction: column;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1em;

  @media screen and (max-width: 728px) {
    padding-bottom: 1em;
    margin-right: 2em;
  }
`;

const AnchorButton = styled.a`
  display: grid;
  justify-content: center;
  align-content: center;
  text-align: center;
  height: 2em;
  width: 4em;
  background-color: ${colors.offWhite};
  color: ${colors.red};
  padding: 0.25em;
  font-weight: 800;
  text-decoration: none;
  border-radius: 1em;
  transition: all 300ms ease-in-out;
  &:hover,
  &:active {
    background-color: ${colors.red};
    color: ${colors.offWhite};
  }
`;

const Heading = styled.h1`
  font-size: 1.5em;
  grid-area: buttons;
  color: ${colors.offWhite};
`;

const Text = styled.p`
  text-align: ${(props) => (props.variant === 'title' ? 'center' : 'left')};
  font-weight: ${(props) => (props.variant === 'title' ? 700 : 400)};
  font-size: ${(props) => (props.variant === 'title' ? '1.2em' : '1em')};
  padding: ${(props) => (props.variant === 'title' ? '0' : '0 1.5em')};
`;

const ListGroup = styled.ul`
  align-self: flex-start;
  width: 100%;
  font-size: 1em;
  display: ${({ variant }) => (variant === 'technology' ? 'grid' : 'flex')};
  flex-direction: column;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 0.5em;
  padding-left: 0;
  @media screen and (max-width: 728px) {
    width: 80%;
    padding-left: 2em;
    text-align: ${({ variant }) =>
      variant === 'technology' ? 'left' : 'justify'};
  }
`;

const ListItem = styled.li`
  list-style: square inside;
  line-height: 1.3em;
  margin: ${(props) => (props.variant === 'highlight' ? '0.25em 1em' : '0')};
`;

const slideFromRight = keyframes`
from {  top:4em; left: 20em }
 to {  top:4em; left: 1em; }`;

const SideBar = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 300px;
  margin-top: 2em;
  z-index: 0;
  top: 4em;
  left: 1em;
  gap: 0.25em;
  animation: ${slideFromRight} 1000ms ease-in-out;
  animation-play-state: running;

  @media screen and (max-width: 728px) {
    flex-direction: row;
    animation: none;
    position: static;
  }
`;

const SideBarItem = styled.div`
  background-color: ${(props) =>
    props.active ? colors.red : colors.lightGray};
  padding: 0.25em 0.4em 0.25em 2em;
  position: relative;
  left: ${(props) => (props.active ? '3em' : '4em')};
  font-weight: ${(props) => (props.active ? 600 : 500)};
  font-size: 0.8em;
  color: ${(props) => (props.active ? colors.offWhite : colors.oliveGreen)};
  width: 200px;
  transition: all 250ms ease;
  &:before {
    content: '';
    width: ${(props) => (props.active ? '0' : '15px')};
    height: ${(props) => (props.active ? '0' : '15px')};
    background-color: ${colors.offWhite};
    position: absolute;
    transform: translateX(-35px) rotate(45deg);
  }
  &:active,
  &:hover {
    font-weight: 600;
    background-color: ${(props) => (props.active ? colors.red : colors.yellow)};
    left: 3em;
  }
  @media screen and (max-width: 728px) {
    color: ${colors.darkBlue}00;
    width: 1em;
    height: 0.75em;
    left: 0;
    overflow-x: none;
    &:hover,
    &:active {
      color: ${colors.darkBlue}00;
      left: 0;
    }
    &:before {
      display: none;
    }
  }
`;

export {
  Container,
  GridItem,
  AnchorButton,
  ButtonGroup,
  Heading,
  Text,
  ListGroup,
  ListItem,
  SideBarItem,
  SideBar,
  ModalBackground,
  SectionContainer,
  ModalContent,
};
