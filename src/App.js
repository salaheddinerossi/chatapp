import './App.css';
import Chat from './components/Chat';
import Contact from './components/Contact';
import IconsBar from './components/IconsBar';

function App() {
  return (
    <div className="App grid grid-cols-24 h-screen">
      <IconsBar />
      <Contact />
      <Chat />
    </div>
  );
}

export default App;
