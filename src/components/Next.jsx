import React from 'react';
import { Link } from 'react-scroll';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import styled from 'styled-components';
import { colors } from '../static/colors';

const StyledNext = styled(Link)`
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: ${colors.red};
  color: ${colors.offWhite};
  padding: 5px 20px;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 200ms ease-in;
  &:hover,
  &:active {
    background-color: ${colors.black};
  }
  &:active {
    padding: 10px 40px;
  }
`;

const Next = ({ url, offset = 0, up = false }) => {
  return (
    <StyledNext to={url} smooth={true} duration={500} offset={offset}>
      {up ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
    </StyledNext>
  );
};

export default Next;
