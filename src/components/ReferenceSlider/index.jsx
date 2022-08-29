import React, { useState, useEffect, useRef } from 'react';
import { referenceData } from '../../static/data';
import {
  Slide,
  Name,
  Comment,
  SlideShow,
  SlideShowSlider,
  SlideShowDots,
  SlideShowDot,
} from './referenceSlider.styles';
import { colors } from '../../static/colors';

const DELAY = 4000;

function ReferenceSlider() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === referenceData.length - 1 ? 0 : prevIndex + 1
        ),
      DELAY
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
        {referenceData.map(
          ({ name, relationship, organization, comment }, i) => (
            <Slide key={i}>
              <h2 style={{ color: colors.offWhite, marginTop: '0.5em' }}>
                {name}
              </h2>
              <p
                style={{
                  marginTop: 0,
                  fontSize: '0.75em',
                  color: colors.offWhite,
                }}
              >
                {organization}
              </p>
              <p
                style={{
                  fontSize: '0.9em',
                  color: colors.offWhite,
                  margin: '0 2em 2em 2em',
                }}
                dangerouslySetInnerHTML={{ __html: comment }}
              />
            </Slide>
          )
        )}
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
