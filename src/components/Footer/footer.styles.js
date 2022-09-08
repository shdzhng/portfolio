import styled from 'styled-components';
import { colors } from '../../static/colors';

const Container = styled.footer`
  width: 100vw;
  height: fit-content;
  background-color: ${colors.black};
  color: ${colors.offWhite};
  display: flex;
  justify-content: space-around;

  padding: 25px 0;

  .header {
    font-weight: 600;
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
    &:hover {
      color: ${colors.yellow};
    }
  }
`;

export { Container };
