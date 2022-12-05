import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Nav />
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

