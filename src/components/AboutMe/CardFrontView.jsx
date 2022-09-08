import React, { memo } from 'react';

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
        who moved to Norfolk, Virginia at age 10 where I became the only student
        of Asian ancestry in my entire school. My familys' immigration story,
        like most others, is one filled with sacrifice and perserverance.{' '}
        <span className="emphasis">
          Through which I learned the importance tenacity and kindness - and
          guided me to pursue a professional life of service.
        </span>
      </p>
      <p>
        My professional background is in the{' '}
        <span className="emphasis">Museum and Social Science</span> where I also
        hold a Master's degree in Tourism, Society and Environment from
        Wageningen University in the Netherlands. I've always held an innate
        intrigue for how society and individuals engage with built spaces and
        I'm excited be pivoting my focus towards digital spaces!
      </p>
      <p>
        As an Education and Program Coordinator, I leveraged my academic
        background to connect the intersection of academia and public history.
        As a Smithsonian intern, I utilized my statistics skills to conduct
        Program Impact Evaluation.
      </p>
      <p>
        As you might be able to tell, I am someone who enjoys wearing many hats
        to see all aspects of operation! See my references below :)
      </p>
    </>
  );
};
export default memo(CardFrontView);
