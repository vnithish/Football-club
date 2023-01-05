import './App.css';
import { Programs } from './components/Programs/Programs';
import "./App.css";
import Hero from "./components/Hero";
import Join from "./components/join/join";
import Reason from "./components/Reasons/Reason";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from './components/Footer/Footer';
import Footer2 from './components/Footer2/Footer2';

function App() {
  return (
    <div className="App">
      <Hero />
      <Programs/>
      <Reason />
      {/* Carousel */}
      <Testimonials />
      <Join />
      <Footer />
     <Footer2/>

    </div>
  );
}

export default App;
