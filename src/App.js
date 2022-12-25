
import './App.css';
import Hero from './components/Hero'

import { Programs } from './Programs/Programs';

import Reason from './components/Reasons/Reason';

import "./App.css";
import Hero from "./components/Hero";
import Join from "./components/join/join";
import Reason from "./components/Reasons/Reason";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (
    <div className="App">
      <Hero />

      <Programs/>

      <Reason />



      <Testimonials />
      <Join />

    </div>
  );
}

export default App;
