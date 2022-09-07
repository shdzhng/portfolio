import styled from 'styled-components';
import { colors } from '../colors';
import { memo } from 'react';

const Divider = styled.div`
  width: 90vw;
  margin: 5em 1em;
  padding: 1px;
  background-color: ${colors.oliveGreen}90;
  position: relative;
  &:before,
  &:after {
    content: '';
    width: 10px;
    height: 10px;
    position: absolute;
    background-color: ${colors.oliveGreen}90;
    top: -4px;
    transform: rotate(45deg);
  }
  &:after {
    right: -11.5px;
  }
  &:before {
    left: -11.5px;
  }
`;

export default memo(Divider);
