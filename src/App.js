import Timeline from './components/Timeline';
import { colors } from './static/colors';
import Footer from './components/Footer';
import Header from './components/Header';
import ReferenceSlider from './components/ReferenceSlider';
import ProjectDisplay from './components/Projects';
import { useEffect } from 'react';
import Divider from './static/components/Divder';

function App() {
  useEffect(() => {
    // console.log('%c Hello there! ', 'background: #222; color: #bada55');
  }, []);

  return (
    <div
      className="App"
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: colors.offWhite,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Header />
      {/* <div>
        <svg width="100%" height="100%" fill={colors.oliveGreen}>
          <text x="50%" y="70%" textAnchor="middle" className={'animate-text'}>
            Shou Zhang
          </text>
        </svg>
      </div> */}{' '}
      <ProjectDisplay />
      <Divider />
      {/* <div style={{ display: 'flex', width: '90vw' }}> */}
      <ReferenceSlider />
      <Timeline />
      {/* </div> */}
      <Divider />
      <Footer />
    </div>
  );
}

export default App;
