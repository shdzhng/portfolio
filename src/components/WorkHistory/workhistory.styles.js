import styled from 'styled-components';
import { colors } from '../../static/colors';

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
    padding-left: 1em;
    display: flex;
    flex-direction: column;
    gap: 0.25em;
  }

  #positions-ul li ul li {
    list-style: none;
    padding-left: -5px;
    &:before {
      content: '🌼';
      margin: 0 5px 0 -22px;
    }
  }

  #positions-ul li ul li {
    &:before {
    }
  }
`;

const JobContainer = styled.div`
  background-color: ${colors.lightBlue};
  position: relative;
  max-height: ${({ show }) => (show ? '40em' : '3em')};
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
    position: static;
    font-weight: 700;
    transition: all 300ms ease-in-out;
    border-radius: 1em 1em 0 0;
    width: 100%;
    background-color: ${colors.darkBlue};
    color: ${colors.offWhite};
    top: 0em;
    right: 0em;
    content: '${({ trueHeader }) => trueHeader}';
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &:not(:last-child) {
    margin-bottom: 1em;
  }
`;

export { JobContainer, ContentContainer };
