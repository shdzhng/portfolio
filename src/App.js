import Timeline from './components/Timeline';
import { colors } from './static/colors';
import Footer from './components/Footer';
import Header from './components/Header';
import ReferenceSlider from './components/ReferenceSlider';
import ProjectDisplay from './components/Projects';
import { useEffect } from 'react';
import Divider from './static/components/Divder';
import FadeIn from './static/components/FadeIn';
import AboutMe from './components/AboutMe';

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
      <h1 style={{ margin: '1em 0', textAlign: 'center' }}> My Projects</h1>
      <ProjectDisplay />
      <Divider />
      <FadeIn>
        <h1 style={{ margin: '1em 0', textAlign: 'center' }}> References</h1>
        <ReferenceSlider />
      </FadeIn>
      <FadeIn>
        <h1 style={{ margin: '1em 0', textAlign: 'center' }}> Education </h1>
        <Timeline id="education-timeline" />
      </FadeIn>

      <Divider />
    </div>
  );
}

export default App;
