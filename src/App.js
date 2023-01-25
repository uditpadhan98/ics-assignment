import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
