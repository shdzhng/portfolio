import Timeline from './components/Timeline';
import { colors } from './static/colors';

function App() {
  return (
    <div
      className="App"
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: colors.offWhite,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Timeline />
    </div>
  );
}

export default App;
