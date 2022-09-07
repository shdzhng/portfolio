import styled from 'styled-components';
import { colors } from '../../static/colors';
import uparrow from './uparrow.svg';

const ContentContainer = styled.div`
  color: ${colors.black};
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 1em 2em 1em 2em;
  font-weight: 300;
  #name {
    font-weight: 700;
    font-size: 1.25em;
    align-self: center;
  }
  #location,
  #duration {
    align-self: center;
    margin: 0;
  }
  #positions-ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5em;
  }

  #positions-ul p,
  #skills-header {
    font-weight: 600;
  }
  #positions-ul ul {
    padding-left: 0;
    display: flex;
    flex-direction: column;
    gap: 0.25em;
  }

  #positions-ul li ul li {
    padding-left: -5px;
    &:before {
      content: '🌼';
      margin: 0 5px 0 -22px;
    }
  }

  @media screen and (max-width: 728px) {
    #name {
      font-weight: 600;
      font-size: 1em;
    }
    #location,
    #duration {
      font-size: 0.9em;
    }

    #positions-ul p,
    #skills-header {
      font-weight: 400;
      font-size: 1em;
    }

    #positions-ul li ul li,
    #skills-ul span {
      font-size: 0.8em;
    }
  }
`;

const JobContainer = styled.div`
  background-color: ${colors.lightBlue};
  position: relative;
  max-height: ${({ show }) => (show ? '80em' : '3em')};
  margin-bottom: 2em;
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  overflow: hidden;
  border-radius: 1em;
  transition: all 500ms ease;
  &:hover {
    &:before {
      color: ${colors.offWhite};
      background-color: ${({ show }) =>
        show ? `${colors.red}` : `${colors.red}`};
    }
  }
  &:before {
    margin: 0 auto;
    visibility: visible;
    height: 3em;
    font-size: 1em;
    font-weight: 700;
    transition: all 400ms ease-in-out;
    border-radius: 1em 1em 0 0;
    width: 100%;
    background-color: ${colors.darkBlue};
    color: ${colors.offWhite};
    content: '${({ trueHeader }) => trueHeader}';
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &:not(:last-child) {
    margin-bottom: 1em;
  }
  @media screen and (max-width: 728px) {
    &:before {
      font-size: 1em;
      height: 3em;
    }
  }
`;

const JobsContainer = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: row;
  position: relative;
  gap: 1em;
  @media screen and (max-width: 728px) {
    flex-direction: column;
  }

  button {
    position: absolute;
    width: 50%;
    height: 3em;
    background-color: ${colors.yellow};
    color: ${colors.darkBlue};
    border: none;
    border-radius: 1em;
    height: 3em;
    font-size: 1em;
    font-weight: 700;
    transition: all 400ms ease-in-out;
    &:hover {
      background-color: ${colors.red};
      color: ${colors.offWhite};
    }
  }
`;

export { JobContainer, JobsContainer, ContentContainer };
