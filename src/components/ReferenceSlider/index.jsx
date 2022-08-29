import React, { useState, useEffect, useRef } from 'react';
import { referenceData } from '../../static/data';
import {
  Slide,
  SlideShow,
  SlideShowSlider,
  SlideShowDots,
  SlideShowDot,
  Comment,
} from './referenceSlider.styles';
import { colors } from '../../static/colors';

const DELAY = 3000;

function ReferenceSlider() {
  const [index, setIndex] = useState(0);
  const [pause, setPause] = useState(false);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  const handleMouseEnter = (i) => {
    setIndex(i);
    setPause(true);
  };

  const handleMouseLeave = () => {
    setPause(false);
  };

  useEffect(() => {
    resetTimeout();
    if (pause) return;
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
  }, [index, pause]);

  return (
    <div
      style={{
        display: 'flex',
        marginTop: '2em',
        backgroundColor: `${colors.darkBrown}10`,
        padding: '1em 0',
        borderRadius: '2em',
        width: '60vw',
        height: 'fit-content',
      }}
    >
      <SlideShow>
        <SlideShowSlider
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {referenceData.map(
            ({ name, relationship, organization, comment }, i) => (
              <Slide
                key={i}
                onMouseEnter={(__) => {
                  handleMouseEnter(i);
                }}
                onMouseLeave={(__) => {
                  handleMouseLeave();
                }}
              >
                <div
                  style={{
                    textAlign: 'center',
                    marginTop: '0.5em',
                    padding: '1em 2em',
                  }}
                >
                  <h2 style={{ color: colors.offWhite }}>{name}</h2>
                  <p
                    style={{
                      fontSize: '0.75em',
                      color: colors.offWhite,
                    }}
                  >
                    {organization}
                  </p>
                </div>

                <Comment
                  style={{
                    color: colors.offWhite,
                    margin: '0 2em 2em 2em',
                  }}
                  dangerouslySetInnerHTML={{ __html: comment }}
                />
              </Slide>
            )
          )}
        </SlideShowSlider>
      </SlideShow>
      <SlideShowDots>
        {referenceData.map((_, i) => (
          <SlideShowDot
            key={i}
            pause={pause}
            active={index === i ? true : false}
            onClick={() => {
              setIndex(i);
            }}
          />
        ))}
      </SlideShowDots>
    </div>
  );
}

export default ReferenceSlider;
