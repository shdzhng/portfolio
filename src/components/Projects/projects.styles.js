import styled, { keyframes } from 'styled-components';
import { colors } from '../../static/colors';
import { animated } from 'react-spring';
import polkadot from '../AboutMe/img/polkadot.svg';

const Container = styled.div`
  right: 130px;
  margin-top: 24px;
  width: 80vw;
  display: flex;
  height: auto;
  left: -72px;
  position: relative;
  transition: all 50ms ease;
  @media screen and (max-width: 728px) {
    flex-direction: column;
    align-items: center;
    gap: 12px;
    min-height: 60vh;
    margin: 0;
    left: 0;
  }
`;

const ModalBackground = styled.div`
  display: ${(props) => (props.open ? "inline-flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  height: 100%;
  background-color: ${colors.darkGreen}90;
  overflow: hidden;
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
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: fit-content;
  padding: 0 30px 30px 30px;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 2;
  transition: all 500ms ease;
  color: ${colors.offWhite};
  border-radius: 30px 0 0 30px;
  -webkit-box-shadow: -8px -1px 4px -1px rgba(0, 0, 0, 0.26);
  -moz-box-shadow: -8px -1px 6px -1px rgba(0, 0, 0, 0.26);
  box-shadow: -3px -1px 6px -1px rgba(0, 0, 0, 0.26);
  ::-webkit-scrollbar {
    width: 10px;
    background-color: ${colors.offBlue};
  }
  ::-webkit-scrollbar-track {
    background: ${colors.offBlue};
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background: ${colors.yellow};
  }
  @media screen and (max-width: 1000px) {
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    padding: 0 12px;
    font-size: 12px;
  }

  .highlight {
    background-position: left;
    background-size: 0% 100%;
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

const PolkaFlex = styled.div`
  background-color: ${colors.offBlue};
  border-radius: 3em;
  width: 100vw;
  margin: 0 auto;
  display: flex;
  color: ${colors.offWhite};
  transition: height 1000ms ease-in-out;
`;

const SectionContainer = styled.div`
  display: flex;
  gap: 1em;
  img {
    max-height: 400px;
    max-width: 600px;
  }
  @media screen and (max-width: 728px) {
    flex-direction: column;
    img {
      display: none;
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1em;
  flex-direction: column;
  @media screen and (max-width: 728px) {
    flex-direction: row;
    margin-bottom: 1em;
  }
`;

const AnchorButton = styled.a`
  display: grid;
  justify-content: center;
  align-content: center;
  text-align: center;
  font-family: 'Lato', sans-serif;
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
  font-family: 'Lato', sans-serif;
  grid-area: buttons;
  text-align: center;
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
  margin-top: 6;
  padding-left: 0;
  @media screen and (max-width: 728px) {
    width: 80%;
    padding-left: 2em;
    text-align: left;
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
  width: 200px;
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
  }
`;

const SideBarItem = styled.div`
  background-color: ${(props) =>
    props.active ? colors.red : colors.lightGray};
  padding: 0.25em 0.4em 0.25em 2em;
  position: relative;
  left: ${(props) => (props.active ? '3em' : '4em')};
  font-weight: ${(props) => (props.active ? 600 : 500)};
  font-size: 12px;
  font-family: 'Lato', sans-serif;
  top: -5em;
  color: ${(props) => (props.active ? colors.offWhite : colors.oliveGreen)};
  width: 200px;
  height: 18px;
  transition: all 250ms ease;
  &:before {
    content: '';
    width: ${(props) => (props.active ? '0' : '16px')};
    height: ${(props) => (props.active ? '0' : '16px')};
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
    width: 0.5em;
    height: 0.75em;
    left: -2em;
    overflow-x: none;
    &:hover,
    &:active {
      color: ${colors.darkBlue}00;
      left: -2em;
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
  PolkaFlex,
};
