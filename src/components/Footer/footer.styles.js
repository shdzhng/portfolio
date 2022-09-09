import styled from 'styled-components';
import { colors } from '../../static/colors';

const Container = styled.footer`
  width: 100vw;
  height: fit-content;
  background-color: ${colors.black};
  color: ${colors.offWhite};
  display: flex;
  justify-content: space-evenly;
  padding: 25px 0;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 20px;
    top: 5px;
    border-top: 2px dashed ${colors.offWhite};
  }

  .header {
    font-weight: 600;
    font-size: 20px;
  }

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
    gap: 6px;
  }

  ul li,
  ul li a {
    cursor: pointer;
    color: ${colors.offWhite};
    text-decoration: none;
    font-size: 17px;
    &:hover {
      color: ${colors.yellow};
    }
  }

  @media screen and (max-width: 700px) {
    flex-direction: column;
    text-align: center;
  }
`;

export { Container };
