import Timeline from './components/Timeline';
import { colors } from './static/colors';
import Footer from './components/Footer';
import Header from './components/Header';
import ReferenceSlider from './components/ReferenceSlider';

const CONSOLE_MESSAGE = 'Hello, my name is Shou';

function App() {
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
      <ReferenceSlider />
      <Timeline />
      <Footer />
    </div>
  );
}

export default App;
