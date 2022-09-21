import Timeline from './components/Timeline';
import ReferenceSlider from './components/ReferenceSlider';
import ProjectDisplay from './components/Projects';
import { useEffect, useRef } from 'react';
import Divider from './static/components/Divder';
import FadeIn from './static/components/FadeIn';
import AboutMe from './components/AboutMe';
import WorkHistory from './components/WorkHistory';
import Footer from './components/Footer';
import Next from './components/Next';
import styled from 'styled-components';

const CenterFlexDiv = styled.div`
  display: flex;
  justify-content: center;
`;

function App() {
  useEffect(() => {
    console.log('%c  ⚡ You found me ⚡! ', 'background: #222; color: #bada55');
  }, []);
  const viewElement = useRef(null);

  return (
    <div
      className="App"
      style={{
        width: '60vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '0 auto',
      }}
    >
      <AboutMe />
      <Next url="projects" offset={-100} />

      <FadeIn>
        <Divider />
        <ProjectDisplay style={{ height: '100vh', flexBasis: 10 }} />
        <CenterFlexDiv>
          <Next url="whereibeen" offset={-200} />
        </CenterFlexDiv>
      </FadeIn>

      <FadeIn>
        <Divider />
        <WorkHistory viewElement={viewElement} style={{ height: '100vh' }} />
        <CenterFlexDiv>
          <Next url="reference" offset={-200} />
        </CenterFlexDiv>
      </FadeIn>

      <FadeIn>
        <Divider />
        <h1 style={{ margin: '1em 0', textAlign: 'center' }} id="reference">
          References (LinkedIn)
        </h1>
        <ReferenceSlider />
      </FadeIn>

      <FadeIn>
        <h1 style={{ margin: '1em 0', textAlign: 'center' }}> Education </h1>
        <Timeline id="education-timeline" />
        <CenterFlexDiv>
          <Next url="about" offset={-200} up={true} />
        </CenterFlexDiv>{' '}
      </FadeIn>
      <Footer />
    </div>
  );
}

export default App;
