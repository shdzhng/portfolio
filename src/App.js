import Timeline from './components/Timeline';
import ReferenceSlider from './components/ReferenceSlider';
import ProjectDisplay from './components/Projects';
import { useEffect } from 'react';
import Divider from './static/components/Divder';
import FadeIn from './static/components/FadeIn';
import AboutMe from './components/AboutMe';
import WorkHistory from './components/WorkHistory';

function App() {
  useEffect(() => {
    // console.log('%c Hello there! ', 'background: #222; color: #bada55');
  }, []);

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
      <FadeIn>
        <h1 id="projects" style={{ margin: '1em 0', textAlign: 'center' }}>
          My Projects
        </h1>
        <ProjectDisplay />
      </FadeIn>
      <Divider />
      <FadeIn>
        <h1 id="whereibeen" style={{}}>
          Where I've <span />
        </h1>
        <WorkHistory />
      </FadeIn>
      <Divider />
      <FadeIn>
        <h1 style={{ margin: '1em 0', textAlign: 'center' }} id="reference">
          References
        </h1>
        <ReferenceSlider />
      </FadeIn>
      <Divider />
      <FadeIn>
        <h1 style={{ margin: '1em 0', textAlign: 'center' }}> Education </h1>
        <Timeline id="education-timeline" />
      </FadeIn>
    </div>
  );
}

export default App;
