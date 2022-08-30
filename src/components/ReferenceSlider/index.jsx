import React, { useState, useEffect, useRef } from 'react';
import { referenceData } from '../../static/data';
import {
  Slide,
  SlideShow,
  SlideShowSlider,
  SlideShowDots,
  SlideShowDot,
  Comment,
  SmallText,
  Heading,
  Divider,
} from './referenceSlider.styles';
import { colors } from '../../static/colors';
import ArrowDropUpTwoToneIcon from '@mui/icons-material/ArrowDropUpTwoTone';
import ArrowDropDownTwoToneIcon from '@mui/icons-material/ArrowDropDownTwoTone';
import { IconButton } from '@mui/material';

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

  const handeIncrement = (prop) => {
    switch (prop) {
      case 'increment': {
        setIndex((cur) => {
          if (cur === 4) return 1;
          return cur + 2;
        });
      }
      case 'decrement': {
        setIndex((cur) => {
          if (cur <= 0) return 4;
          return cur - 1;
        });
      }
    }
  };

  const handleMouseEnter = (i) => {
    setIndex(i);
    setPause(true);
  };

  const handleMouseLeave = () => {
    setPause(false);
  };

  useEffect(() => {
    resetTimeout();
    console.log(index);
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
          {referenceData.map(({ name, organization, comment }, i) => (
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
                <Heading style={{ color: colors.offWhite }}>{name}</Heading>
                <SmallText
                  style={{
                    fontSize: '0.75em',
                    color: colors.offWhite,
                  }}
                >
                  {organization}
                </SmallText>
              </div>

              <Comment
                style={{
                  color: colors.offWhite,
                  margin: '0 2em 2em 2em',
                }}
                dangerouslySetInnerHTML={{ __html: comment }}
              />
            </Slide>
          ))}
        </SlideShowSlider>
      </SlideShow>
      <Divider />

      <SlideShowDots>
        <IconButton
          onClick={() => handeIncrement('decrement')}
          sx={{ height: '15px', width: '15px', paddingTop: '20px' }}
        >
          <ArrowDropUpTwoToneIcon />
        </IconButton>
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
        <IconButton
          onClick={() => handeIncrement('increment')}
          sx={{ height: '15px', width: '15px', paddingBottom: '20px' }}
        >
          <ArrowDropDownTwoToneIcon />
        </IconButton>
      </SlideShowDots>
    </div>
  );
}

export default ReferenceSlider;
