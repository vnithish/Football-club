import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.js'
import Gallery from './Gallery.js'
import Admin from './Admin';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/admin' element={<Admin/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
