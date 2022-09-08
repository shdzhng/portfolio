import React from 'react';
import './hovercard.styles.js';
import {
  CardContainer,
  Card,
  CardFront,
  CardBack,
} from './hovercard.styles.js';

function HoverCard() {
  return (
    <CardContainer className="card-container">
      <Card className="card">
        <CardFront className="card-front">front/yellow</CardFront>
        <CardBack className="card-back">back/white</CardBack>
      </Card>
    </CardContainer>
  );
}

export default HoverCard;
