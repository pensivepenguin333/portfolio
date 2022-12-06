import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Personas from './components/Personas'
import Responsive from './components/Responsive'
import Iterative from './components/Iterative'
import Dev from './components/Dev'
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Nav />
      <hr />
      <div className='container'>
        <Routes>
          <Route path="/portfolio2/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/personas" element={<Personas/>} />
          <Route path="/responsive" element={<Responsive/>} />
          <Route path="/iterative" element={<Iterative/>} />
          <Route path="/dev" element={<Dev/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

