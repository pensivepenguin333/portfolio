import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Project from './components/Project'
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
          <Route path="/personas" element={<About/>} />
          <Route path="/responsive" element={<About/>} />
          <Route path="/iterative" element={<About/>} />
          <Route path="/react" element={<About/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

