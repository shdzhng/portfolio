import React, { memo } from 'react';
import ForwardIcon from '@mui/icons-material/Forward';
import ThreeSixtyIcon from '@mui/icons-material/ThreeSixty';
const CardFrontView = () => {
  return (
    <>
      <p>
        I am a <span className="emphasis">Junior Frontend Developer</span> based
        in Los Angeles who loves building engaging web interfaces. I am the type
        of developer who likes to think beyond the code, and focus on how the
        interfaces co-create divese experiences with the users.
      </p>
      <h4>My Background</h4>
      <p>
        I am a{' '}
        <span className="emphasis">1.5 generation Chinese-born American</span>{' '}
        who moved to Norfolk, Virginia at age 10 and became the only student of
        Asian ancestry in my entire school. My familys' immigration story, like
        many others, is one of a humble beginning paved with sacrifice and
        perserverance.{' '}
        <span className="emphasis">
          Through which I learned the importance tenacity and kindness - and
          inspired me to pursue a life of service.
        </span>{' '}
        Because I have experienced living in different places, I hold a deep
        intrigue for how society and individuals engage with the spaces that
        surround us - and I'm excited be pivoting my focus towards digital
        spaces!
      </p>
      <p>
        My professional background is in the{' '}
        <span className="emphasis">Museum and Social Science</span> where I hold
        a Master's degree in Tourism, Society and Environment from Wageningen
        University in the Netherlands. As a{' '}
        <span className="emphasis">Education and Program Coordinator</span>, I
        leveraged my academic background to connect the intersection of academia
        and public history. As an{' '}
        <span className="emphasis"> intern at the Smithsonian</span>, I utilized
        my statistics skills to conduct Program Impact Evaluation.
      </p>
      <p>
        As you might be able to tell, I am someone who enjoys wearing many hats
        and seeing all aspects of operation!
      </p>
      <p className="next">
        <ThreeSixtyIcon
          style={{
            display: 'inline-flex',
            verticalAlign: 'text-bottom',
            fontSize: 'inherit',
          }}
        />
      </p>
    </>
  );
};
export default memo(CardFrontView);
