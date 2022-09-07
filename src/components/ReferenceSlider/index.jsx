import React, { useState, useEffect, useRef, useCallback, memo } from 'react';
import referenceData from '../../static/data/referenceData';
import {
  Slide,
  SlideShow,
  SlideShowSlider,
  SlideShowDots,
  SlideShowDot,
  Comment,
  Container,
  SmallText,
  Heading,
  AllContainer,
  Divider,
} from './referenceSlider.styles';
import { colors } from '../../static/colors';
import ArrowDropUpTwoToneIcon from '@mui/icons-material/ArrowDropUpTwoTone';
import ArrowDropDownTwoToneIcon from '@mui/icons-material/ArrowDropDownTwoTone';
import { IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const DELAY = 3000;

function ReferenceSlider() {
  const [index, setIndex] = useState(0);
  const [pause, setPause] = useState(false);
  const timeoutRef = useRef(null);

  const resetTimeout = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, []);

  const handeIncrement = useCallback((command) => {
    const max = referenceData.length - 1;
    switch (command) {
      case 'increment': {
        setIndex((cur) => {
          if (cur >= max) return 1;
          return cur + 2;
        });
      }
      case 'decrement': {
        setIndex((cur) => {
          if (cur <= 0) return max;
          return cur - 1;
        });
      }
    }
  }, []);

  const handleMouseEnter = useCallback((i) => {
    setIndex(i);
    setPause(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setPause(false);
  }, []);

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
    <AllContainer>
      <IconButton
        className="big-btn"
        onClick={() => handeIncrement('decrement')}
      >
        <ArrowBackIosIcon />
      </IconButton>
      <Container>
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
            className="small-btn"
            onClick={() => handeIncrement('decrement')}
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
            className="small-btn"
            onClick={() => handeIncrement('increment')}
          >
            <ArrowDropDownTwoToneIcon />
          </IconButton>
        </SlideShowDots>
      </Container>
      <IconButton
        className="big-btn"
        onClick={() => handeIncrement('increment')}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </AllContainer>
  );
}

export default memo(ReferenceSlider);
