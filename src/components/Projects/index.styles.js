import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { colors } from '../../static/colors';

const Container = styled.div`
  margin: 3em auto 0 8.25em;
  width: 70vw;
  min-height: 55vh;
  display: flex;

  @media screen and (max-width: 728px) {
    flex-direction: column;
    width: 90vw;
    align-items: center;
    gap: 1em;
    min-height: 60vh;
    margin: 0;
  }
`;

const enter = keyframes`
  from {opacity: 0;}
  to {opacity: 1;}
`;

const GridItem = styled.div`
  background-color: ${colors.darkBlue};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  width: 90%;
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
  @media screen and (max-width: 728px) {
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    border-radius: 1em 0 0 1em;
    font-size: 0.75em;
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
  border-radius: 2em;
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

const ModalBackground = styled.div`
  display: ${(props) => (props.open ? 'inline-flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
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

const Text = styled.p`
  text-align: ${(props) => (props.variant === 'title' ? 'center' : 'left')};
  font-weight: ${(props) => (props.variant === 'title' ? 700 : 400)};
  font-size: ${(props) => (props.variant === 'title' ? '1.1em' : '1em')};
  padding: ${(props) => (props.variant === 'title' ? '0' : '0 1.5em')};
`;

const ListGroup = styled.ul`
  align-self: flex-start;
  width: 100%;
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
  margin: ${(props) => (props.variant === 'highlight' ? '0.25em 1em' : '0')};
`;

const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin-top: 2em;
  gap: 0.25em;
  @media screen and (max-width: 728px) {
    flex-direction: row;
  }
`;

const SideBarItem = styled.div`
  background-color: ${(props) =>
    props.active ? colors.red : colors.lightGray};
  padding: 0.25em 1em 0.25em 2em;
  font-weight: ${(props) => (props.active ? 600 : 500)};
  font-size: 0.9em;
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
    color: ${colors.offWhite};
    background-color: ${colors.yellow};
  }
  @media screen and (max-width: 728px) {
    color: ${colors.darkBlue}00;
    width: 10px;
    height: 10px;
    overflow-x: none;
    &:hover,
    &:active {
      color: ${colors.darkBlue}00;
      overflow-x: none;
    }
    &:before,
    &:after {
      border-radius: 0 0 0.5em 0;
      transform: translateX(-10px) translateY(-14px) rotate(45deg);
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
