import styled from 'styled-components';

const Card = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  transform-style: preserve-3d;
  transition: all 1s ease;
`;

const CardContainer = styled.div`
  position: relative;
  width: 250px;
  height: 320px;
  padding: 2em;
  &:hover {
    ${Card} {
      transform: rotateY(180deg);
    }
  }
`;

const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: yellow;
`;

const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: white;
  transform: rotateY(180deg);
`;

export { CardContainer, Card, CardFront, CardBack };
