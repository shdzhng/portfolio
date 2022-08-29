import React, { useState, useEffect, useRef } from 'react';
import { referenceData } from '../../static/data';
import {
  Slide,
  Name,
  Info,
  Comment,
  SlideShow,
  SlideShowSlider,
  SlideShowDots,
  SlideShowDot,
} from './referenceSlider.styles';

const colors = ['#0088FE', '#00C49F', '#FFBB28'];
const delay = 2500;

function ReferenceSlider() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    console.log(index);

    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === referenceData.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <SlideShow>
      <SlideShowSlider
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {referenceData.map(({ name, relationship, comment }, i) => (
          <Slide key={i}>
            <Name>{name}</Name>
            <Comment>{comment}</Comment>
          </Slide>
        ))}
      </SlideShowSlider>

      <SlideShowDots>
        {referenceData.map((_, i) => (
          <SlideShowDot
            key={i}
            active={index === i ? true : false}
            onClick={() => {
              setIndex(i);
            }}
          />
        ))}
      </SlideShowDots>
    </SlideShow>
  );
}

export default ReferenceSlider;
