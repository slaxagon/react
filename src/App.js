import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import CompSearch from "./components/CompSearch/CompSearch";
import ChangeBg from "./components/ChangeBg/ChangeBg";
import ChangeFontSize from "./components/ChangeFontSize/ChangeFontSize";
import Comp1 from "./components/Comp1/Comp1";
import Comp2 from "./components/Comp2/Comp2";
import Comp3 from "./components/Comp3/Comp3";
import Comp4 from "./components/Comp4/Comp4";
import Comp5 from "./components/Comp5/Comp5";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/home/home';
import About from './components/About/About';
import Services from './components/Service/Service';
import Contact from './components/Contact/Contact';
import Product from './components/Products/Products';

function App() {
  return (
    <Router>
      <div className="mainContainer">
        <div className="sidebar">
          <Sidebar/>
        </div>
        <div className="header">
          <CompSearch />
        </div>
        <div className="content">
          <ul className="flex-container">
            <Comp1 />
            <Comp2 />
            <Comp3 />
            <Comp4 />
            <Comp5 />
          </ul>
          <ChangeBg/>
          <ChangeFontSize/>
        </div>
        
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;

/*
import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import NrAlbumu from './components/NrAlbumu';
import NrGrupy from './components/NrGrupy';
import ImieNazwisko from './components/ImieNazwisko';
import Counter from './components/counter';


function App() {
  return (
    <div className="App">
      <div className="HelloWorld">
        <HelloWorld name ="Hello Wrold"/>
      </div>
      <div className="ImieNazwisko">
        <ImieNazwisko fullname ="Arkadiusz Gnieciak"/>
      </div>
      <div className='NrGrupy'>
        <NrGrupy group="INMN4_PA1.1"/>
      </div>
      <div className='NrAlbumu'>
        <NrAlbumu album ="GD28353"/>
      </div>
      <div className='Counter'>
        <Counter />
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edytuj <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
