import Timeline from './components/Timeline';
import { colors } from './static/colors';
import Footer from './components/Footer';

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
      <Timeline />
      <Footer />
    </div>
  );
}

export default App;
