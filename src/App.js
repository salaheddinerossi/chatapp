import './App.css';
import Chat from './components/Chat';
import Contact from './components/Contact';
import IconsBar from './components/IconsBar';
import {   Link } from "react-router-dom";
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';


function App() {
  return (
    <div className="App grid grid-cols-24 h-screen">
      <Router>
        <IconsBar />
        <Contact />
        <Switch>
          <Route exact path='/:id'>
            <Chat />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
