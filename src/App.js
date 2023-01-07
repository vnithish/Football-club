import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home.js";
import Gallery from "./Gallery.js";
import Admin from "./Admin";
import Login from "./components/Login/Login";
import PrivateRoute from './ProtectedRoute'
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route element = {<PrivateRoute/>}>
            <Route element = {<Admin/>} path = '/admin'/>
          </Route>
          {/* <PrivateRoute path = '/admin' component = {Login}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
