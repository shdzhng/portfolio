import React from 'react';
import styled from 'styled-components';
import { colors } from '../colors';
import { Link } from 'react-scroll';

const REMOTE_BUTTONS = [
  {
    name: 'About',
    to: 'about',
  },
  {
    name: 'Projects',
    to: 'projects',
  },
  {
    name: 'Employment',
    to: 'whereibeen',
  },
  {
    name: 'Reference',
    to: 'reference',
  },
  {
    name: 'Education',
    to: 'education-timeline',
  },
];

const RemoteContainer = styled.nav`
  position: fixed;
  bottom: 1em;
  right: 1em;
  z-index: 99;
  height: 200px;
  width: 120px;
  background-color: ${colors.mediumBlue1};
  display: flex;
  flex-direction: column;
  border-radius: 1em 1em 1.5em 1.5em;
  -webkit-box-shadow: 3px 3px 5px 0px ${colors.darkBlue};
  -moz-box-shadow: 3px 3px 5px 0px ${colors.darkBlue};
  box-shadow: 3px 3px 5px 0px ${colors.darkBlue};
  display: none;

  section {
    display: flex;
    flex-direction: column;
    gap: 3px;
    align-content: strech;

    button {
      margin: 0 1em;
      border: none;
      border-radius: 2em;
      font-weight: 600;
      background-color: ${colors.black};
      color: ${colors.offWhite};
      transition: all 150ms ease-in;
      &:hover,
      &:active {
        background-color: ${colors.yellow};
        color: ${colors.black};
      }
    }

    button:first-child {
      margin-top: 0.5em;
    }

    button:last-child {
      margin-bottom: 1em;
    }
  }

  #filler {
    background-color: ${colors.darkBlue};
    width: 100%;
    height: 100%;
    border-radius: 0 0 1em 1em;
  }

  #header {
    background-color: ${colors.darkBlue};
    border-radius: 1.5em 1.5em 0 0;
    width: 100%;
    height: 20%;
    position: relative;
    &:before {
      position: absolute;
      right: 0.5em;
      top: 0.25em;
      content: '';
      padding: 0.25em;
      border-radius: 2em;
      background-color: red;
    }
    &:after {
      position: absolute;
      right: 1.25em;
      top: 0.25em;
      content: '';
      padding: 0.25em;
      border-radius: 2em;
      background-color: green;
    }
  }
`;

function Remote() {
  return (
    <RemoteContainer>
      <div id="header"></div>
      {/* <p>Remote</p> */}
      <section>
        {REMOTE_BUTTONS.map(({ name, to }) => (
          <button>
            <Link to={to} spy={true} smooth={true} duration={800} offset={-300}>
              {name}
            </Link>
          </button>
        ))}
      </section>
      <div id="filler"></div>
    </RemoteContainer>
  );
}

export default Remote;
