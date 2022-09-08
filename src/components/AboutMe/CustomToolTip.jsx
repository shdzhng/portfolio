import React from 'react';
import { ToolTip } from './aboutme.styles';
import { keyframes } from 'styled-components';

const SLIDE_ANIMATION = keyframes`
   from { opacity: 0; right:{right};top:0.25em;z-index:99}
   to { opacity: 1;right:{right};top:{top};z-index:99}
  `;

const CustomToolTip = ({ top, right, message, ...props }) => {
  return (
    <ToolTip
      right={right}
      top={top}
      animationWide={SLIDE_ANIMATION}
      message={message}
    >
      {props.children}
    </ToolTip>
  );
};

export { CustomToolTip };
