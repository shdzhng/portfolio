import React from 'react';
import { Container } from './footer.styles';
import { Link } from 'react-scroll';

function Footer() {
  return (
    <Container>
      <div>
        <p className="header">Navigation</p>
        <ul>
          <li>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li>
            {' '}
            <Link
              to="whereibeen"
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              to="reference"
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}
            >
              Reference
            </Link>
          </li>
          <li>
            <Link
              to="education-timeline"
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}
            >
              Education
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <p className="header">Social</p>
        <ul>
          <li>
            <a target="__blank" href="https://github.com/shdzhng">
              Github
            </a>
          </li>
          <li>
            <a target="__blank" href="https://www.linkedin.com/in/shouzhang/">
              LinkedIn
            </a>
          </li>
          <li>
            <a target="__blank"></a>
          </li>
          <li>
            <a target="__blank"></a>
          </li>
        </ul>
      </div>
      <div>
        <p className="header">Publications: </p>
        <ul>
          <li>
            <a
              target="__blank"
              href="https://folklife.si.edu/magazine/my-fathers-memory-in-flushing-new-york"
            >
              Article: How I Found My Father’s Memory in Flushing, New York
            </a>
          </li>
          <li>
            <a
              target="__blank"
              href="https://chsamuseum.tumblr.com/post/648629862594134016/hotpot-multiculturalism-a-vision-of-a-shared"
            >
              Article: Hotpot Multiculturalism: A Vision of a Shared America
            </a>
          </li>
          <li>
            <a
              target="__blank"
              href="https://chsamuseum.tumblr.com/post/646002541738557440/homecoming-a-meditation-on-place-and-belonging"
            >
              Article: Homecoming: A Meditation on Place and Belonging Across
              Countries
            </a>
          </li>

          <li>
            <a target="__blank" href="  https://edepot.wur.nl/529928">
              Dissertation: The Discursive Remembering of Japanese Americans’
              Difficult Heritage
            </a>
          </li>
        </ul>
      </div>
    </Container>
  );
}

export default Footer;
