import './App.css';
import Hero from './components/Hero'

import { Programs } from './Programs/Programs';

import Reason from './components/Reasons/Reason';

function App() {
  return (
    <div className="App">
      <Hero />

      <Programs/>

      <Reason />

    </div>
  );
}

export default App;
