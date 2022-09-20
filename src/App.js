import Timeline from './components/Timeline';
import ReferenceSlider from './components/ReferenceSlider';
import ProjectDisplay from './components/Projects';
import { useEffect } from 'react';
import Divider from './static/components/Divder';
import FadeIn from './static/components/FadeIn';
import AboutMe from './components/AboutMe';
import WorkHistory from './components/WorkHistory';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    console.log('%c  ⚡ You found me ⚡! ', 'background: #222; color: #bada55');
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
        <Divider />
        <ProjectDisplay style={{ height: '100vh' }} />
      </FadeIn>

      <FadeIn>
        <Divider />
        <WorkHistory style={{ height: '100vh' }} />
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
      </FadeIn>
      <Footer />
    </div>
  );
}

export default App;
